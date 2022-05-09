import React from "react";
import IMG from "../../assets/images/duysex.jpg";

const ChatList = ({ data, selectContent }) => {
  return (  
    <div className="chatApp-listChat" style={{ cursor: 'pointer' }} onClick={ () => selectContent(data.id) }>
      <div
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
      </div>
      <div className="chatApp-listChat__infor">
        <div className="chatApp-listChat__infor-top">
          <h3 className="chatApp-listChat-infor-userName">{data.userName}</h3>
          <span className="chatApp-listChat-infor-timeChat">
            {data.timeChat}
          </span>
        </div>
        <div className="chatApp-listChat-infor-bottom">
          <p className="chatApp-listChat-infor-content">
            {data.message[0].message}
          </p>
          {data.numberChat > 0 && (
            <span className="chatApp-listChat-infor-numberChat">
              {data.numberChat}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatList;
