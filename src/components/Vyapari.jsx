const Vyapari = () => {
  return (
    <div className="page-body">
      <div className="page-header">
        <h1>Manage Vyapari</h1>

        <div className="page-actions">
          <input
            type="text"
            placeholder="Search vyaparis..."
            className="search-box"
          />
          <button className="add-btn">＋ Add</button>
        </div>
      </div>

      <p className="empty-text">No vyaparis found</p>
    </div>
  );
};

export default Vyapari;
