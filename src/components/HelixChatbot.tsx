const HelixChatbot = () => {
  return (
    <div
      id="docsbot-widget-embed"
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "400px",
        height: "600px",
        zIndex: 9999,
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
      }}
    >
      <iframe
        src="https://docsbot.ai/iframe/3eTjhBlgnc442jTX4xoo/tcJwCQtJEsV6qoKR8Y4r"
        width="100%"
        height="100%"
        style={{
          border: "none",
        }}
        allow="microphone; camera"
        title="Helix AI Assistant"
      />
    </div>
  );
};

export default HelixChatbot;
