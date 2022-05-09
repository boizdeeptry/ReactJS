import ChatApp from './components/ChatApp/ChatApp.jsx';
import './App.css';
function App() {
  const chat = {
    chatList: [
      {
        id: "1", //ID chat của cuộc đối thoại
        userName: "TruongMV", // Ten nguoi nhan
        timeChat: '12:30', // time cuoi cung nhan tin nhan
        numberChat: 2, // so tin nhan chua xem
        message: [
          {
            id: "1312312", // Id tin nhắn
            from: "13221313122123", // ID người gửi
            to: "1312321123123321", // Id người nhận
            date_time: "09/05/2022", // Thời gian nhắn
            message: "Hello đũy trường", // Nội dung tin nhắn
          },
          {
            id: "1",
            from: "21312312321312",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Ơi nghe đây !",
          },
          {
            id: "1",
            from: "13221313122123",
            to: "21312312321312",
            date_time: "09/05/2022",
            message: "Đang làm gì đấy ?",
          },
          {
            id: "1312312123123123213",
            from: "21312312321312",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Chơi game !",
          },
        ],
      },
      {
        id: "2", //ID chat của cuộc đối thoại
        userName: "DuyHV", // Tên cuộc đối thoại
        timeChat: '8:51',
        numberChat: 1,
        message: [
          {
            id: "2", // Id tin nhắn
            from: "21312312321312", // ID người gửi
            to: "13221313122123", // Id người nhận
            date_time: "09/05/2022", // Thời gian nhắn
            message: "Hello đũy trường", // Nội dung tin nhắn
          },
          {
            id: "13123121312",
            from: "13221313122123",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
          {
            id: "131231212312312312",
            from: "13221313122123",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
          {
            id: "1312312123123123213",
            from: "13221313122123",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
        ],
      },
      {
        id: "3", //ID chat của cuộc đối thoại
        userName: "TruongMV", // Tên cuộc đối thoại
        timeChat: '8:51',
        numberChat: 0,
        message: [
          {
            id: "3", // Id tin nhắn
            from: "13221313122123", // ID người gửi
            to: "1312321123123321", // Id người nhận
            date_time: "09/05/2022", // Thời gian nhắn
            message: "Hello đũy trường", // Nội dung tin nhắn
          },
          {
            id: "13123121312",
            from: "21312312321312",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
          {
            id: "131231212312312312",
            from: "13221313122123",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
          {
            id: "1312312123123123213",
            from: "21312312321312",
            to: "1312321123123321",
            date_time: "09/05/2022",
            message: "Hello đũy trường",
          },
        ],
      },
    ],
    name: "TruongMV", // Tên người dùng
    id: "13221313122123", // Id người dùng
    avatar: "hahahahahahahahahahaha", // link avatar
  };
  
  // Logic render message :
  // + Nếu id người dùng trùng với id người gửi ( from ) thì render bên trái
  // + Nếu khác thì render bên phải
  
  return (
    <div className="App">
      <ChatApp data={chat}/>
    </div>
  );
}

export default App;
