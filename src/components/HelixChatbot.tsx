import { useState } from "react";
import { MessageSquare, X } from "lucide-react";

const HelixChatbot = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Toggle Button */}
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
            background: "#111827",
            color: "white",
            cursor: "pointer",
            zIndex: 9999,
            boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
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
            background: "white",
            borderRadius: "16px",
            overflow: "hidden",
            zIndex: 9999,
            boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
          }}
        >
          {/* Header */}
          <div
            style={{
              height: "56px",
              background: "#111827",
              color: "white",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0 16px",
              fontWeight: 600,
            }}
          >
            <span>Helix</span>

            <button
              onClick={() => setOpen(false)}
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                cursor: "pointer",
              }}
            >
              <X size={22} />
            </button>
          </div>

          {/* DocsBot iframe */}
          <iframe
            src="https://docsbot.ai/iframe/3eTjhBlgnc442jTX4xoo/tcJwCQtJEsV6qoKR8Y4r"
            width="100%"
            height="calc(100% - 56px)"
            style={{
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
