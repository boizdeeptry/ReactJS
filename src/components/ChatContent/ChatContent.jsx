import React from "react";
import IMG from "../../assets/images/duysex.jpg";

const ChatContent = ({ content, userId }) => {
  return (
    <>
      <h3 className="chatApp-contentChat-userName">
        {content[0]?.userName || content.userName}
      </h3>
      <div className="chatApp-contentChat-content">
        {content[0]?.message.map((item, index) => {
          return (
            <div
              className={
                userId === item.from
                  ? "chatApp-contentChat-itsMe"
                  : "chatApp-contentChat-bots"
              }
              key={index}
            >
              {userId === item.from && <div
                className="chatApp-listChat__images"
                style={{ width: "52px", height: "49px" }}
              >
                <img
                  src={IMG}
                  alt="This is avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                    objectFit: "cover",
                  }}
                />
              </div>}
              <div
                className={
                  userId === item.from
                    ? "chatApp-contentChat-me"
                    : "chatApp-contentChat-bot"
                }
              >
                {item.message}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ChatContent;
