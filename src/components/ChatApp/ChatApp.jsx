import React from "react";
import ChatContent from "../ChatContent/ChatContent";
import ChatList from "../ChatList/ChatList";
import "./chat-app.css";
const ChatApp = ({ data }) => {
  const [ content, setContent ] = React.useState({
    userName: 'TruongMV',
  });
  const selectContent = (id) => {
      const dataContent = data.chatList.filter(item => item.id === id);
      setContent(dataContent)
  }
  const handleChange = (e) => {
    console.log(e.target.value);
  }
  return (
    <section className="chatApp">
      <div className="chatApp-listChats">
        <input type="text" placeholder="Search for..." style={{padding: '10px 20px', borderRadius: '12px', outline: 'none'}} onChange={handleChange}/>
        {data.chatList.map((val,idx) => (
          <ChatList data={val} key={idx} selectContent={selectContent} />
        ))}
      </div>
      <div className="chatApp-contentChat">
        <ChatContent content={content} userId={data.id} />
      </div>
    </section>
  );
};

export default ChatApp;
