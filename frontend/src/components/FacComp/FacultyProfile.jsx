import React, { useState, useRef, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Book,
  MessageSquare,
  FileText,
  Upload,
  Send,
  Folder,
  X
} from 'lucide-react';
import './FacultyProfile.css';
import hodImage from '../../assets/HOD.jpg'; // Adjust the path to your image

const FacultyProfile = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [leaveFile, setLeaveFile] = useState(null);
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', sender: 'faculty' },
    { text: 'I had a question about the DSP assignment', sender: 'student' },
    { text: 'Sure, what would you like to know?', sender: 'faculty' },
  ]);

  const chatRef = useRef(null);

  const subjects = [
    { name: 'Advanced Engineering Mathematics', code: 'MA201' },
    { name: 'Digital Signal Processing', code: 'EC302' },
    { name: 'Computer Networks', code: 'CS401' },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsChatOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="faculty-layout">
      <div className="faculty-container">
        <div className="faculty-profile-card">
          <div className="faculty-profile-header">
            <div className="faculty-profile-pic">
              <img src={hodImage} alt="Profile" />
            </div>
            <div>
              <div className="faculty-name">Dr. James Wilson</div>
              <div className="faculty-designation">Professor, Computer Science</div>
              <div className="faculty-qualification">Ph.D. in Computer Science</div>
            </div>
          </div>
          <div className="faculty-contact-info">
            <div><Mail /> james.wilson@university.edu</div>
            <div><Phone /> +1 (555) 123-4567</div>
            <div><MapPin /> Room 405, Engineering Block</div>
          </div>
        </div>
      </div>
      <div className="faculty-content">
        <div className="faculty-about">
          <h2>About</h2>
          <p>Dr. James Wilson is a distinguished professor with over 15 years of experience in Computer Science education and research. His expertise includes Machine Learning, Computer Networks, and Digital Signal Processing. He has published numerous papers in leading international journals and conferences.</p>
        </div>
        <div className="faculty-card">
          <div className="faculty-card-title"><Book /> Current Subjects</div>
          <div className="faculty-subjects">
            {subjects.map((subject, index) => (
              <div key={index} className="faculty-subject">
                <div className="faculty-subject-name">{subject.name}</div>
                <div className="faculty-subject-code">{subject.code}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="faculty-card">
          <div className="faculty-card-title"><FileText /> Leave Application</div>
          <div className="faculty-leave-application">
            <div className="faculty-upload-box">
              <input
                type="file"
                id="leaveFile"
                className="faculty-file-input"
                onChange={(e) => setLeaveFile(e.target.files[0])}
              />
              <label htmlFor="leaveFile" className="faculty-file-label">
                <Upload />
                <span>Upload your leave letter</span>
              </label>
              {leaveFile && <div>{leaveFile.name}</div>}
            </div>
            <button className="faculty-submit-button" onClick={() => console.log('Submit Leave Application')}>Submit</button>
          </div>
        </div>
        <button className="faculty-message-button" onClick={() => setIsChatOpen(true)}>
          <MessageSquare />
        </button>
        {isChatOpen && (
          <div className="faculty-chat-modal" ref={chatRef}>
            <div className="faculty-chat-header">
              <div className="faculty-chat-header-info">
                <img src={hodImage} alt="Profile" className="faculty-chat-header-image" />
                <div>
                  <div className="faculty-chat-header-name">Dr. James Wilson</div>
                  <div className="faculty-chat-header-status">Online</div>
                </div>
              </div>
              <button className="faculty-chat-close-button" onClick={() => setIsChatOpen(false)}>
                <X />
              </button>
            </div>
            <div className="faculty-chat-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`faculty-chat-message ${msg.sender === 'faculty' ? 'faculty-message' : 'student-message'}`}>
                  <img src={hodImage} alt="Profile" className="faculty-chat-message-image" />
                  <div className="faculty-chat-message-text">{msg.text}</div>
                </div>
              ))}
            </div>
            <div className="faculty-chat-input">
              <div className="faculty-chat-input-wrapper">
                <input
                  type="text"
                  className="faculty-chat-input-field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                />
                <button className="faculty-chat-send-button" onClick={() => console.log('Send Message')}>
                  <Send />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyProfile;