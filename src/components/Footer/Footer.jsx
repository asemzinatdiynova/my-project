import React from "react";

function Footer({ copyrightText, socialLinks }) {
  return (
    <footer
      style={{
        borderTop: "1px solid #e1ebe0",
        marginTop: "50px",
        padding: "24px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#6b7280",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: 0 }}>{copyrightText}</p>
      <div style={{ display: "flex", gap: "20px" }}>
        {socialLinks.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            style={{
              color: "#2d5a27",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            {social.platform}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
 