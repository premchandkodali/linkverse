import { useState } from 'react';
import { Search } from 'lucide-react';
import './Faculty.css';

const facultyData = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    role: "Professor",
    department: "Computer Science",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    name: "Dr. James Wilson",
    role: "Associate Professor",
    department: "Mathematics",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Assistant Professor",
    department: "Physics",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    role: "Professor",
    department: "Engineering",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 5,
    name: "Dr. Lisa Anderson",
    role: "Associate Professor",
    department: "Chemistry",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 6,
    name: "Dr. Robert Taylor",
    role: "Professor",
    department: "Biology",
    image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

function Faculty() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaculty = facultyData.filter(faculty =>
    faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faculty.department.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='faculty-page'>
      <div className="faculty-header">
        <h1 id='facultypage'>Faculty Profiles</h1>
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
                      <p className="role">{faculty.role}</p>
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