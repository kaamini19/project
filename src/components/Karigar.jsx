const Karigar = () => {
  return (
    <div className="page-body">
      <div className="page-header">
        <h1>Manage Karigar</h1>

        <div className="page-actions">
          <input
            type="text"
            placeholder="Search karigars..."
            className="search-box"
          />
          <button className="add-btn">＋ Add</button>
        </div>
      </div>

      <p className="empty-text">No karigars found</p>
    </div>
  );
};

export default Karigar;
