import background from "../assets/back.png";
import Sidebar from "./sidebar";

const ContactForm = () => {
  return (
    <div 
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        height: "100vh", 
        display: "flex"
      }}
    >
      {/* Sidebar */}
      <div style={{ 
        height: "150vh", 
        width: "170px", 
        position: "fixed", 
        left: 0, 
        top: 0, 
        bottom: 0, 
        backgroundColor: "#c2e8f2", 
        boxShadow: "2px 0 10px rgba(0, 0, 0, 0.4)" 
      }}>
        <Sidebar />
      </div>

      {/* Main Content */}
      <div style={{ 
        flex: 1, 
        marginLeft: "170px", 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center" 
      }}>
        <div>
          {/* Title */}
          <h1 style={{ 
            fontSize: "2.5rem", 
            fontWeight: "bold", 
            color: "#01303f", 
            marginBottom: "10px", 
            textAlign: "center" 
          }}>
            Contact-Us
          </h1>

          {/* Subtitle */}
          <p style={{ 
            color: "#333", 
            marginBottom: "20px", 
            textAlign: "center",
            fontSize: "0.95rem"
          }}>
            Our attendants are prepared to help you!
          </p>

          {/* Form Card */}
          <form 
            style={{ 
              background: "#ffffff", 
              padding: "30px", 
              borderRadius: "8px", 
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", 
              width: "340px"
            }}
          >
            {/* Name */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ 
                display: "block", 
                fontSize: "12px", 
                marginBottom: "5px", 
                color: "#01303f" 
              }}>
                Name
              </label>
              <input 
                type="text" 
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "4px", 
                  border: "2px solid #8cb4bc", 
                  fontSize: "14px", 
                  color: "#01303f", 
                  backgroundColor: "#f5fafa"
                }}
              />
            </div>

            {/* Email */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ 
                display: "block", 
                fontSize: "12px", 
                marginBottom: "5px", 
                color: "#01303f" 
              }}>
                E-mail
              </label>
              <input 
                type="email" 
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "4px", 
                  border: "2px solid #8cb4bc", 
                  fontSize: "14px", 
                  color: "#01303f", 
                  backgroundColor: "#f5fafa"
                }}
              />
            </div>

            {/* Comment */}
            <div style={{ marginBottom: "15px" }}>
              <label style={{ 
                display: "block", 
                fontSize: "12px", 
                marginBottom: "5px", 
                color: "#01303f" 
              }}>
                Comment / Question
              </label>
              <textarea 
                style={{ 
                  width: "100%", 
                  padding: "10px", 
                  borderRadius: "4px", 
                  border: "2px solid #8cb4bc", 
                  fontSize: "14px", 
                  color: "#01303f", 
                  backgroundColor: "#f5fafa", 
                  height: "100px",
                  resize: "none"
                }}
              />
            </div>

            {/* Button */}
            <button 
              type="submit" 
              style={{ 
                backgroundColor: "#018e8e", 
                color: "white", 
                border: "none", 
                padding: "10px 20px", 
                borderRadius: "5px", 
                cursor: "pointer", 
                fontSize: "14px", 
                width: "100%", 
                fontWeight: "bold" 
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = "#016f6f"}
              onMouseOut={(e) => e.target.style.backgroundColor = "#018e8e"}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;