import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const HelixChatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="helix-toggle"
          aria-label="Open Helix AI assistant"
        >
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          className="helix-window"
        >
          <div className="helix-bar"><span className="helix-dots"><i></i><i></i><i></i></span><span>helix@portfolio</span></div>
          <button
            onClick={() => setOpen(false)}
            className="helix-close"
            aria-label="Close Helix AI assistant"
          >
            <X size={18} />
          </button>

          {/* DocsBot iframe */}
          <iframe
            src="https://docsbot.ai/iframe/3eTjhBlgnc442jTX4xoo/tcJwCQtJEsV6qoKR8Y4r"
            className="helix-frame"
            allow="microphone; camera"
            title="Helix AI Assistant"
          />
        </div>
      )}
    </>
  );
};

export default HelixChatbot;
