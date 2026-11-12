import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    altPhone: '',
    age: '',
    plan: '',
    message: ''
  });

  const validateForm = () => {
    let errorMessages = [];

    if (!formData.name.trim()) errorMessages.push('Name is required.');
    if (!formData.email.trim()) {
      errorMessages.push('Email is required.');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.push('Email is invalid.');
    }
    if (!formData.phone.trim()) {
      errorMessages.push('Primary contact number is required.');
    } else if (!/^\+?\d{10,13}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      errorMessages.push('Primary contact number must be at least 10 digits.');
    }
    if (formData.altPhone.trim() && !/^\+?\d{10,13}$/.test(formData.altPhone.replace(/[\s-]/g, ''))) {
      errorMessages.push('Alternative contact number must be at least 10 digits.');
    }
    if (!formData.age.trim()) {
      errorMessages.push('Age is required.');
    } else if (isNaN(formData.age) || Number(formData.age) <= 0) {
      errorMessages.push('Age must be a positive number.');
    }
    if (!formData.plan.trim()) errorMessages.push('Plan is required.');
    if (!formData.message.trim()) errorMessages.push('Message is required.');

    if (errorMessages.length > 0) {
      alert(errorMessages.join('\n'));
      return false;
    }

    return true;
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      altPhone: '',
      age: '',
      plan: '',
      message: ''
    });
  };

  const whatsapp = () => {
    if (!validateForm()) return;

    const { name, email, phone, altPhone, age, plan, message } = formData;

    const query =
      `*Body Balance - Membership Inquiry*\n\n` +
      `*Name :* ${name}\n` +
      `*Email :* ${email}\n` +
      `*Primary Contact :* ${phone}\n` +
      `*Alternative Contact :* ${altPhone.trim() ? altPhone : 'Not provided'}\n` +
      `*Age :* ${age}\n` +
      `*Plan :* ${plan}\n` +
      `*Message :* ${message}`;

    const url = `https://wa.me/+918766539293?text=${encodeURIComponent(query)}`;
    window.open(url, '_blank').focus();
  };

  return (
    <div className="container" id="contact">
      <div className="screen">
        <div className="screen-header">
          <div className="screen-header-left">
            <div className="screen-header-button close"></div>
            <div className="screen-header-button maximize"></div>
            <div className="screen-header-button minimize"></div>
          </div>
          <div className="screen-header-right">
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
            <div className="screen-header-ellipsis"></div>
          </div>
        </div>
        <div className="screen-body">
          <div className="screen-body-item left">
            <div className="app-title">
              <span>BODY BALANCE</span>
              <span className="app-subtitle">GET IN TOUCH</span>
            </div>
            <div className="app-contact">
              <div className="app-contact-item">
                <span className="app-contact-label">PRIMARY CONTACT</span>
                <a href="tel:+918766539293" className="app-contact-val">+91 87665 39293</a>
              </div>
              <div className="app-contact-item">
                <span className="app-contact-label">ALTERNATIVE CONTACT</span>
                <a href="tel:+918888817886" className="app-contact-val">+91 88888 17886</a>
              </div>
              <div className="app-contact-item">
                <span className="app-contact-label">ADDITIONAL HOTLINE</span>
                <a href="tel:+914363557535" className="app-contact-val">+91 43635 57535</a>
              </div>
              <div className="app-contact-item">
                <span className="app-contact-label">EMAIL ADDRESS</span>
                <a href="mailto:contact@bodybalance.com" className="app-contact-val">contact@bodybalance.com</a>
              </div>
              <div className="app-contact-item">
                <span className="app-contact-label">GYM LOCATION</span>
                <span className="app-contact-val">Satara Parisar, Aurangabad, Maharashtra</span>
              </div>
              <div className="app-contact-item">
                <span className="app-contact-label">HOURS</span>
                <span className="app-contact-val">Mon - Sat: 6:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>
          <div className="screen-body-item">
            <div className="app-form">
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  autoComplete="name"
                  placeholder="NAME *"
                  id="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  autoComplete="email"
                  type="email"
                  placeholder="EMAIL *"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  type="tel"
                  placeholder="CONTACT NO *"
                  id="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  type="tel"
                  placeholder="ALTERNATIVE CONTACT NO (OPTIONAL)"
                  id="altPhone"
                  value={formData.altPhone}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  type="number"
                  placeholder="AGE *"
                  id="age"
                  value={formData.age}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group">
                <input
                  className="app-form-control"
                  placeholder="PLAN (BASIC / PREMIUM / PRO) *"
                  id="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group message">
                <input
                  className="app-form-control"
                  placeholder="MESSAGE *"
                  id="message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
              </div>
              <div className="app-form-group buttons">
                <button type="button" className="app-form-button" onClick={handleCancel}>
                  RESET
                </button>
                <button type="button" className="app-form-button send" onClick={whatsapp}>
                  SEND VIA WHATSAPP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
