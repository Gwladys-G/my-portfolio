import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons';
import { dataProjects } from './DataProjects';


const SearchBar = ({ projects, setSearchResults }) => {
  const keywords = dataProjects.reduce((accumulator, project) => {
    project.skills.forEach(skill => {
      if (!accumulator.includes(skill)) {
        accumulator.push(skill);
      }
    });
    return accumulator;
  }, []);
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchInputRef = useRef(null);

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (!value) {
      setSearchResults(projects);
    } else {
      const resultsArray = projects.filter((project) => {
        let skillList = project.skills;
        return skillList.some((skill) =>
          skill.toUpperCase().includes(value.toUpperCase())
        );
      });
      setSearchResults(resultsArray);
    }
    setSelectedKeyword(value);
    setShowDropdown(true);
  };

  useEffect(() => {
    const resultsArray = projects.filter((project) => {
      let skillList = project.skills;
      return skillList.some((skill) =>
        skill.toUpperCase().includes(selectedKeyword.toUpperCase())
      );
    });
    setSearchResults(resultsArray);
  }, [selectedKeyword, setSearchResults, projects]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchInputRef, setShowDropdown]);

  return (
    <form
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        margin: "20px auto 30px auto",
        height: "5%",
        borderRadius: "10px"
      }}
      className="search"
      onSubmit={handleSubmit}
    >
      <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
        <input
          ref={searchInputRef}
          style={{
            flex: 5,
            height: "30px",
            borderRadius: "5px",
            borderColor: "#BB9F06",
            borderWidth: "2px",
            borderStyle: "solid",
            width: "100%",
            paddingLeft: "10px",
            paddingRight: selectedKeyword ? "30px" : "10px"
          }}
          className="search_input"
          type="text"
          id="search"
          value={selectedKeyword}
          onChange={handleSearchChange}
          placeholder="Enter a stack eg: React"
        />
        {selectedKeyword && (
          <button
            style={{
              position: "absolute",
              right: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              outline: "none",
              cursor: "pointer"
            }}
            onClick={() => {
              setSelectedKeyword("");
              setShowDropdown(false);
            }}
          >
            <FontAwesomeIcon icon={faTimes} style={{ color: "#BB9F06" }} />
          </button>
        )}
        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 2,
              background: "white",
              borderRadius: "5px",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              maxHeight: "200px",
              overflowY: "scroll",
              width: "100%"
            }}
          >
            {keywords
              .filter((keyword) =>
                keyword.toUpperCase().includes(selectedKeyword.toUpperCase())
              )
              .map((keyword, index) => (
                <div
                  key={index}
                  style={{
                    padding: "5px",
                    cursor: "pointer",
                    background:
                      selectedKeyword.toUpperCase() === keyword.toUpperCase()
                        ? "#BB9F06"
                        : "white",
                    color:
                      selectedKeyword.toUpperCase() === keyword.toUpperCase()
                        ? "white"
                        : "#BB9F06"
                  }}
                  onClick={() => {
                    setSelectedKeyword(keyword);
                    setShowDropdown(false);
                  }}
                >
                  {keyword}
                </div>
              ))}
          </div>
        )}
      </div>
      <button
        style={{
          height: "100%",
          borderRadius: "5px",
          borderColor: "#BB9F06",
          borderWidth: "2px",
          borderStyle: "solid",
          marginLeft: "10px"
        }}
        className="search_button"
      >
        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#BB9F06" }} />
      </button>
    </form>
  );
}

export default SearchBar;
