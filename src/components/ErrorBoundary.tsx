import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error in application:', error, errorInfo);
  }

  private handleReload = () => {
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0708] text-[#fdfbf7] flex items-center justify-center p-6 text-center">
          <div className="max-w-md w-full rounded-3xl border-2 border-yellow-500/50 bg-[#14080b] p-8 shadow-[0_0_50px_rgba(234,179,8,0.2)]">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border border-red-500/40 bg-red-950/60 text-red-400">
              <AlertTriangle className="h-8 w-8" />
            </div>
            <h1 className="font-cinzel text-2xl font-black text-white mb-2">
              ARUSH ON BED 😂
            </h1>
            <p className="text-sm text-yellow-300 font-bold mb-4">
              &ldquo;Lagta hai Aarush bhai ka hotel system refresh maang raha hai!&rdquo;
            </p>
            <p className="text-xs text-zinc-400 mb-6">
              Kripya page ko refresh karein ya dobara reload karein.
            </p>
            <button
              onClick={this.handleReload}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-600 px-6 py-3 font-bold text-black shadow-lg hover:from-yellow-400 hover:to-amber-500 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RELOAD WEBSITE 🔄</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
