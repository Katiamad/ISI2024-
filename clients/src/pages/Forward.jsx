// export default Forward;
import React, { useState, useEffect } from "react";
import { FaPaperPlane, FaSave } from "react-icons/fa";
import axios from "axios";
import { useLocation } from 'react-router-dom';

function Forward() {
  const location = useLocation();
  const [content, setContent] = useState('');
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const subjectParam = queryParams.get('subject');
    const contentParam = queryParams.get('content');

    if (contentParam) {
      setContent(decodeURIComponent(contentParam));
    }

    if (subjectParam) {
      setSubject(decodeURIComponent(subjectParam));
    }
  }, [location.search]);

  const [formData, setFormData] = useState({
    cc: '',
    email_receiver: '',
    email_sender: '',
    date: '',
    subject: '',
    content: ''
  });

  const [formErrors, setFormErrors] = useState({})

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setFormData({
      ...formData,
      subject: subject || '',
      content: content || '',
    });
  }, [subject, content, location.search]);

  const onFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData, [name]: value
    })
  }

  const validateEmail = (email) => {
    const regExp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return String(email)
      .toLowerCase()
      .match(
        regExp
      );
  }

  const validateForm = () => {
    const errors = {}

    if (!formData.email_receiver.trim()) {
      errors.email_receiver = "Destination email required";
    } else if (!validateEmail(formData.email_receiver.trim())) {
      errors.email_receiver = "Email incorrect";
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject required";
    } else if (formData.subject.trim().length < 3) {
      errors.subject = "Subject too short";
    }

    if (!formData.content.trim()) {
      errors.content = "Content is empty";
    } else if (formData.content.trim().length < 3) {
      errors.content = "Content is too short";
    }

    if (formData.cc.trim() && !validateEmail(formData.cc.trim())) {
      errors.cc = "cc email incorrect";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  }

  const sendEmail = () => {
    if (!validateForm()) return;

    const instance = axios.create({
      withCredentials: true
    });

    instance.post(`${process.env.REACT_APP_API_LINK}emails/send-email/`, {
      cc: formData.cc,
      email_receiver: formData.email_receiver,
      email_sender: localStorage["email"],
      date: new Date(),
      subject: formData.subject,
      content: formData.content
    })
      .then(function (res) {
        window.location.href = "/sent"
        console.log(res.json());
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  const saveDraft = () => {
    if (!validateForm()) return;

    const instance = axios.create({
      withCredentials: true
    });

    instance.post(`${process.env.REACT_APP_API_LINK}drafts/draft/`, {
      cc: formData.cc,
      email_receiver: formData.email_receiver,
      email_sender: localStorage["email"],
      date: new Date(),
      subject: formData.subject,
      content: formData.content,
      draft: 1
    })
      .then(function (res) {
        window.location.href = "/drafts"
        console.log(res.json());
      })
      .catch(function (error) {
        console.log(error)
      });
  }

  return (
    <div className="text-left">
      <form className="bg-white rounded px-8 pt-6 pb-8 mb-4 mx-auto w-full">
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm mb-2">
            Destination
            <input name="email_receiver" className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" onChange={onFormChange} placeholder="e-mail_receiver" />
            {formErrors.email_receiver && <span className="text-red-600">{formErrors.email_receiver}</span>}
          </label>
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm mb-2">
            CC
            <input name="cc" className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" onChange={onFormChange} placeholder="e-mail_receiver" />
            {formErrors.cc && <span className="text-red-600">{formErrors.cc}</span>}
          </label>
        </div>
        <div className="w-1/2">
          <label className="block text-gray-700 text-sm mb-2">
            Subject
            <input name="subject" className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" onChange={onFormChange} placeholder="subject" value={formData.subject} />
            {formErrors.subject && <span className="text-red-600">{formErrors.subject}</span>}
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-4">
            Content
            <textarea name="content" rows="10" className="mt-3 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-auto" onChange={onFormChange} placeholder="content" value={formData.content}></textarea>
            {formErrors.content && <span className="text-red-600">{formErrors.content}</span>}
          </label>
        </div>
        <div>
          <label className="block text-gray-700 text-sm mb-2">
            Attachment
            <input name="attachment" className="mx-6" type="file"></input>
          </label>
        </div>
        <div className="flex items-center text-center">
          <button className="flex mt-6 btn-color py-2 px-4 rounded font-bold text-center text-white" type="button" onClick={sendEmail}>
            Envoyer <FaPaperPlane width={12} className="mx-2 text-sm text-white"></FaPaperPlane>
          </button>
          <button className="mx-4 flex mt-6 py-2 px-4 rounded font-bold text-gray-700 border bg-white" type="button" onClick={saveDraft}>
            Sauvegarder <FaSave width={12} className="mx-2 text-sm text-blue-600"></FaSave>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Forward;
