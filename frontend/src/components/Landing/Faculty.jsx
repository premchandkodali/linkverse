import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import './Faculty.css';

function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/faculty')
      .then(response => response.json())
      .then(data => setFacultyData(data))
      .catch(error => console.error('Error fetching faculty data:', error));
  }, []);

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='faculty-page'>
      <div className="faculty-header">
<<<<<<< HEAD:frontend/src/components/Landing/Faculty.jsx
        <h1 id='facultypage'>Faculty Profiles</h1>
=======
        <h1>Faculty Profiles</h1>
>>>>>>> 4291c7f (commit):src/components/Faculty/Faculty.jsx
        <div className="search-container-fluid">
          <input
            type="text"
            placeholder="Search faculty..."
            aria-label="Search faculty profiles"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <Search
            className="search-icon"
            onClick={() => document.querySelector('.search-input').focus()}
            aria-label="Search"
          />
        </div>
      </div>

      {/* Faculty Grid */}
      <div className="faculty-grid">
        {filteredFaculty.length === 0 ? (
          <div className="no-results">
            <p>No faculty found matching your search.</p>
          </div>
        ) : (
          filteredFaculty.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="card-inner">
                <div className="image-container-fluid">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  <div className="overlay">
                    <div className="faculty-info">
                      <h3>{faculty.name}</h3>
                      <p className="role">{faculty.designation}</p>
                      <p className="department">{faculty.department}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Faculty;