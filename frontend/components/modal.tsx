import React from 'react';
import styles from './modal.module.css'; // Ensure your CSS is updated accordingly

const Modal = ({ fileName, file, category, setCategory, onClose, onUpload }) => {
  const renderFilePreview = (file) => {
    if (file && file.type.startsWith('image/')) {
      return (
          <>
            <p><b>File Preview</b></p>
            <img src={URL.createObjectURL(file)} alt="Preview" className={styles.filePreview} />
          </>
          )
    }
    if (file && file.type === 'application/pdf') {
      return (
          <>
            <p><b>File Preview</b></p>
            <iframe src={URL.createObjectURL(file)} title="Preview" className={styles.pdfPreview} />
          </>
      )
    }
    return null;
  };

  return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <h2>Upload File</h2>
          <p>File Name: {fileName}</p>
          {renderFilePreview(file)}
          <div>
            <label htmlFor="category-select" className={styles.categoryLabel}>Choose a tag:</label>
            <select
                id="category-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className={styles.dropdown}
            >
              <option value="">--Please choose an option--</option>
              <option value="Medical Records">Medical Records</option>
              <option value="Passports">Passports</option>
              <option value="Emergency Information">Emergency Information</option>
              <option value="Education Transcripts">Education Transcripts</option>
              <option value="Legal Contracts">Legal Contracts</option>
              <option value="Misc">Misc</option>
            </select>
          </div>
          <div className={styles.uploadButtonContainer}>
            <button onClick={onClose} className={styles.cancelButton}>cancel</button>
            <button onClick={onUpload} className={styles.uploadButton}>Upload</button>
          </div>
        </div>
      </div>
  );
};

export default Modal;
