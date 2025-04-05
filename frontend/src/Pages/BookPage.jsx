"use client";
import * as React from "react";
import "./book.css";
import Footer from "../components/Footer";

// BookHeader Component
const BookHeader = () => {
  return (
    <div className="book-contain">
      <div className="book-layout">
        <div className="content-column">
          <div className="content-wrapper">
            <div className="navigation-bar">
              <div className="nav-list">
                <div className="nav-group">
                  <div className="nav-active">Overview</div>
                  <div className="nav-link">View 11 Editions</div>
                  <div className="nav-link">Details</div>
                  <div className="nav-link">Reviews</div>
                  <div className="nav-link">Lists</div>
                  <div className="nav-link">Related Books</div>
                </div>
              </div>
            </div>
            <div className="book-info">
              <div className="book-edition">
                <div className="edition-text">
                  An edition of{" "}
                  <span className="link-underline">
                    Visions of the daughters of Albion
                  </span>
                </div>
                <div className="year-text">(1793)</div>
              </div>
              <div className="edit-section">
                <div className="edit-info">
                  <div className="editor-text">
                    Last edited by{" "}
                    <span className="editor-link">ImportBot</span>
                  </div>
                  <div className="history-text">
                    July 17, 2024 |{" "}
                    <span className="history-link">History</span>
                  </div>
                </div>
                <button className="edit-button">Edit</button>
              </div>
            </div>
            <h1 className="book-title">
              Visions of the daughters of
              <br />
              Albion
            </h1>
            <h2 className="book-author">
              by <span className="author-link">William Blake</span>
            </h2>
            <div className="book-stats">
              <div className="rating-group">
                <div className="rating-wrapper">
                  <div className="rating-stars">★★★★★</div>
                  <div className="rating-count">5.0 (2 ratings)</div>
                  <div className="rating-separator">·</div>
                  <div className="want-read">2 Want to read</div>
                  <div className="stats-separator">·</div>
                  <div className="have-read">1 Have read</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// BookCover Component
const BookCover = () => {
  return (
    <div className="book-cover-container" >
      <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1b49af642c10ca85940e136d60f3fbd4f97b50e7?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="book-cover-image" />
      <a href="#" className="preview-link">
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ee3300e691573292a859d3f481066c09ca0652f4?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="preview-icon" />
        <div className="preview-text">Preview</div>
      </a>
      <div className="action-buttons">
        <a href="#" className="borrow-button">
          Borrow
        </a>
        <div className="details-button">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea0f955f6f0e3780167a4afa185883cab760de4a?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="details-icon" />
        </div>
      </div>
      <div className="reading-status">
        <button className="status-button">
          <div className="status-text">Want to Read</div>
        </button>
        <a href="#" className="status-dropdown">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/73ba505ba94cc9acd1f046e080264c729239101f?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="dropdown-icon" />
        </a>
      </div>
      <div className="rating-container">
        <div className="rating-stars">★★★★★</div> 
      </div>
      <div className="separator" />
      <div className="book-actions">
        <a href="#" className="action-link">
          <div className="action-icon-container">
            <div className="action-icon-wrapper">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/50d54a5c84a04fe81d05f65421818eda1fff4dd4?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="action-icon" />
            </div>
          </div>
          <div className="action-text">Review</div>
        </a>
        <a href="#" className="action-link">
          <div className="action-icon-container">
            <div className="action-icon-wrapper">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a9ed3b34c1d9294cc51d1d4af0da1563de54cec?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="action-icon" />
            </div>
          </div>
          <div className="action-text">Notes</div>
        </a>
        <a href="#" className="action-link">
          <div className="action-icon-container">
            <div className="action-icon-wrapper">
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/61c26f5c4f62549ad98043056fd6c3c24feef38f?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" className="action-icon" />
            </div>
          </div>
          <div className="action-text">Share</div>
        </a>
      </div>
    </div>
  );
}

// BookInfo Component
const BookInfo = () => {
  return (
    <div className="book-info-container">
        <div className="main-content">
          <div className="book-details">
            <p className="description">
              This edition doesn't have a description yet. Can you{" "}
              <a href="#" className="add-link">
                add one
              </a>
              ?
            </p>
            <div className="metadata-grid">
              <div className="metadata-card">
                <span className="metadata-label">Publish Date</span>
                <span className="metadata-value">2002</span>
              </div>
              <div className="metadata-card">
                <span className="metadata-label">Publisher</span>
                <a href="#" className="metadata-link">
                  Huntington Library
                </a>
              </div>
              <div className="metadata-card">
                <span className="metadata-label">Language</span>
                <a href="#" className="metadata-link">
                  English
                </a>
              </div>
              <div className="metadata-card">
                <span className="metadata-label">Pages</span>
                <span className="metadata-value">78</span>
              </div>
            </div>
            <p className="preview-languages">
              Previews available in:{" "}
              <a href="#" className="language-link">
                English
              </a>
            </p>
            <div className="subjects-section">
              <h3 className="section-heading">Subjects</h3>
              <div className="subject-links">
                English poetry, Illustrations, Poetry (poetic works by one
                author)
              </div>
            </div>
            <div className="people-section">
              <h3 className="section-heading">People</h3>
              <a href="#" className="person-link">
                William Blake (1757-1827)
              </a>
            </div>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

// EditionsList Component
const EditionsList = () => {
  const editions = [
    {
      coverImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/3de80378b9c4a293c9131a19650a9831b8c549b8?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86",
      title: "Visions of the daughters of Albion",
      publisher: "2002, Huntington Library",
      language: "in English",
      action: "borrow",
    },
    {
      coverImage: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bfbc231a91755af7a6415cd89b781c5453b0ae2?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86",
      title: "Visions of the daughters of Albion ...",
      publisher: "1884, Printed by W. Blake, 1793. [Edmonton,",
      location: "Eng.",
      language: "in English",
      action: "locate",
    },
  ];

  return (
    <section className="editions-container">
      <div className="editions-content">
        <header className="editions-header">
          <div className="header-controls">
            <div className="edition-info">
              <p className="edition-count">
                Showing 2 featured editions.{" "}
                <button className="view-all-link">View all 11 editions?</button>
              </p>
              <label className="entries-label">
                Show
                <select className="entries-select">
                  <option>3</option>
                </select>
                entries
              </label>
            </div>
            <div className="search-container">
              <label className="search-label">
                Search:
                <input type="search" className="search-input" />
              </label>
            </div>
          </div>
        </header>

        <div className="table-container">
          <table className="editions-table">
            <thead>
              <tr>
                <th className="edition-header">Edition</th>
                <th className="availability-header">Availability ↑</th>
              </tr>
            </thead>
            <tbody>
              {editions.map((edition, index) => (
                <tr
                  key={index}
                  className={`edition-row ${index % 2 === 1 ? "alternate-row" : ""}`}
                >
                  <td className="edition-info">
                    <div className="cover-container">
                      <img
                        src={edition.coverImage}
                        alt="Book cover"
                        className="cover-image"
                      />
                    </div>
                    <div className="edition-details">
                      <a href="#" className="edition-title">
                        {edition.title}
                      </a>
                      <p className="publisher-info">{edition.publisher}</p>
                      {edition.location && (
                        <p className="location-info">{edition.location}</p>
                      )}
                      <p className="language-info">{edition.language}</p>
                    </div>
                  </td>
                  <td className="action-cell">
                    {edition.action === "borrow" ? (
                      <div className="borrow-container">
                        <a href="#" className="borrow-button">
                          Borrow
                        </a>
                        <button className="details-button">
                          <img
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4b3f93ba2ab511e1c0b42a721f862f8fda350e?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86"
                            alt="Details"
                            className="details-icon"
                          />
                        </button>
                      </div>
                    ) : (
                      <a href="#" className="locate-button">
                        <img
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f380fb824c9e8a2fe8470a0dc09ea6b9d66b5f19?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86"
                          alt="External link"
                          className="external-icon"
                        />
                        <span>Locate</span>
                      </a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

//BookMetaData Component
const BookMetaData = () => {
  return (
    <article className="book-metadata">
      <h2 className="main-title">Book Details</h2>
      <hr className="separator" />

      <section className="edition-notes-section">
        <h3 className="section-title">Edition Notes</h3>
        <p className="bibliographical-ref">
          Includes bibliographical references (p. 75-78) and index.
        </p>
        <dl className="description-list">
          <dt className="term">Published in</dt>
          <dd className="details">San Marino, Calif</dd>
        </dl>
      </section>

      <section className="classifications-section">
        <h3 className="section-title">Classifications</h3>
        <dl className="vertical-description-list">
          <div className="description-group">
            <dt className="term">
              Dewey Decimal
              <br />
              Class
            </dt>
            <dd className="details">821/.7</dd>
          </div>
          <div className="description-group">
            <dt className="term">
              Library of
              <br />
              Congress
            </dt>
            <dd className="details">PR4144 .V5 2002, PR4144.V5 2002</dd>
          </div>
        </dl>
      </section>

      <section className="external-links-section">
        <h3 className="section-title">External Links</h3>
        <ul className="links-list">
          <li>Contributor biographical information</li>
          <li>Publisher description</li>
        </ul>
      </section>

      <section className="physical-object-section">
        <h3 className="section-title">The Physical Object</h3>
        <dl className="physical-description-list">
          <div className="term-group">
            <dt className="term">Pagination</dt>
            <dt className="term">Number of pages</dt>
          </div>
          <div className="details-group">
            <dd className="details">v, 78 p., 11 p. of plates :</dd>
            <dd className="details">78</dd>
          </div>
        </dl>
      </section>

      <section className="identifiers-section">
        <h3 className="section-title">Edition Identifiers</h3>
        <div className="identifiers-container">
          <div className="identifiers-column">
            <dl className="identifiers-list">
              <dt>Open Library</dt>
              <dt>Internet Archive</dt>
              <dt>ISBN 10</dt>
              <dt>LCCN</dt>
              <dt>Library Thing</dt>
              <dt>Goodreads</dt>
            </dl>
          </div>
          <div className="identifiers-column identifiers-column-values">
            <dl className="identifiers-list">
              <dd>OL3953744M</dd>
              <dd className="link">visionsofdaughte00blak</dd>
              <dd>087328187X</dd>
              <dd className="link">2001051909</dd>
              <dd className="link">895344</dd>
              <dd className="link">1192954</dd>
            </dl>
          </div>
        </div>
      </section>

      <section className="work-identifiers-section">
        <h3 className="section-title">Work Identifiers</h3>
        <dl className="description-list work-identifiers-list">
          <dt className="term">Work ID</dt>
          <dd className="details">OL575430W</dd>
        </dl>
      </section>
    </article>
  );
}

// CommunityReviews Component
const CommunityReviews = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-title">Community Reviews (0)</h2>
      <p className="no-reviews">
        No community reviews have been submitted for this work.
      </p>
      <a href="#" className="add-review-link">
        + Log in to add your community review
      </a>
    </section>
  );
};

// RelatedBooks Component
const RelatedBooks = () => {
  return (
    <section className="related-section">
      <h2 className="related-title">
        <a href="#" className="related-link">
          You might also like
        </a>
      </h2>
      <div className="books-grid">
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e9085ebe4da5839cc907b710596319646903fe1?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c180f013be5b9a6b17544d75f09577cfb5fab52?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/7b8c6f19fa38d838bd170ce95685d351bc00b4c1?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/872fb4a5bf3c104a636f163741ed24989c31f510?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3edbdf7e475a9a286e406dfc2ec99397955cda99?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/bad0615728ac959fb8477064fa06340997cf5c8d?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
      </div>
    </section>
  );
};

// AuthorBooks Component
const AuthorBooks = () => {
  return (
    <section className="author-books">
      <h2 className="related-title">
        <a href="#" className="related-link">
          More by this author
        </a>
      </h2>
      <div className="books-grid">
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/41819de04b59b7d50343be614648b2f0be51ac0f?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c13d01252252fd2062a30c39188ec1096ef65c56?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d8533be128a675a80f230f321c764af98971a95?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8639b4e0223d59ed702b1f72d4ba49670a266c12?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/b61a07d06235a0dacea5af11e32e88c85443ec16?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
        <div className="book-item">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/3f8bafab07ed23408e783b185c950afb7d60edbb?placeholderIfAbsent=true&apiKey=fe290345c9a445f3bd5a704406ac3e86" alt="" className="book-cover" />
          <button className="borrow-button">Borrow</button>
        </div>
      </div>
    </section>
  );
};

// Main BookDetails Component
const BookDetails = () => {
  return (
    <main className="book-container">
      <article className="book-wrapper">
        <section className="main-content" >
          <div className="layout">
            <BookCover />
          </div>
          <div className="content-wrapper">
            <BookHeader />
            <BookInfo />
            <EditionsList />
            <BookMetaData />
            <CommunityReviews />
            <RelatedBooks />
            <AuthorBooks />
          </div>
        </section>
      </article>
      <Footer/>
    </main>
  );
};

export default BookDetails;
