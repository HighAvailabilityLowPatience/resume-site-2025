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
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "64px",
            height: "64px",
            borderRadius: "9999px",
            border: "none",
            background: "linear-gradient(135deg, #fb923c, #ea580c)",
            color: "white",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 8px 24px rgba(234,88,12,0.35)",
          }}
        >
          <MessageSquare size={28} />
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "400px",
            height: "650px",
            zIndex: 9999,
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
            background: "white",
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              zIndex: 10000,
              background: "rgba(0,0,0,0.6)",
              border: "none",
              color: "white",
              borderRadius: "9999px",
              width: "32px",
              height: "32px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <X size={18} />
          </button>

          {/* DocsBot iframe */}
          <iframe
            src="https://docsbot.ai/iframe/3eTjhBlgnc442jTX4xoo/tcJwCQtJEsV6qoKR8Y4r"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
            }}
            allow="microphone; camera"
            title="Helix AI Assistant"
          />
        </div>
      )}
    </>
  );
};

export default HelixChatbot;
