import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import './NextPage.css';

const NextPage = () => {
    const [location, setLocation] = useState('');
    const [photos, setPhotos] = useState([]);
    const [files, setFiles] = useState([])
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/create');
    };

    const handleLocationChange = (e) => {
        setLocation(e.target.value);
    };

    const handleCancel = () => {
        navigate('/');
    };

    const handlePhotoChange = (e) => {
        setPhotos(Array.from(e.target.files))
    };

    const handleFilesChange = (e) => {
      setFiles([...e.target.files]);
    };

    const handleSave = () => {

    };

    const handlePost = () => {

    };

return (
    <div className="details-container">
      <h2>Give us more details</h2>
        
        <div className='location-container'>
          <div className="location">
            <h3>Location</h3>
              <input type="text" placeholder="Add Address"/>
          </div>
        </div>

        <div className='calandar-container'>
          <div className="calandar">
            <h3>Dates</h3>
              <label>Start Date:</label>
              <input type="date" />
              <label>End Date:</label>
              <input type="date" />
          </div>
        </div>

        <div className='photo-upload-container'>
          <div className="photoupload">
            <h3>Photos</h3>
              <input type="file" multiple />
            </div>
        </div>

        <div className='file-upload-container'>
          <div className="fileupload">
            <h3>Upload Files</h3>
            <input type="file" multiple onChange={(handleFilesChange)} />
            <button>Upload</button>
          </div>
        </div>

      <div className="button-group">
        <button onClick={handleBack}>Back</button>
        <button onClick={handleCancel}>Cancel</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={handlePost}>Post</button>
      </div>
    </div>
  );
};

export default NextPage;