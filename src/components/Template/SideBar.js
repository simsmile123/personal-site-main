import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Simrith Ranjan</h2>
        <p>
          <a href="mailto:simrith.ranjan@gmail.com">simrith.ranjan@gmail.com</a>
        </p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        Hi, I&apos;m Simrith. I am a{' '}
        <a href="https://www.cs.purdue.edu/">Purdue CS</a> student.
        {/* software engineering intern at{' '}
        <a href="https://www.foodserviceconsultantsstudio.com/">FSC</a>. */}
        Previously, I went to{' '}
        <a href="https://tjhsst.fcps.edu/">
          Thomas Jefferson High School for Science and Technology
        </a>
        .
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? (
            <Link to="/resume" className="button">
              Learn More
            </Link>
          ) : (
            <Link to="/about" className="button">
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">
        &copy; Simrith Ranjan <Link to="/">simrithranjan.com</Link>.
      </p> */}
    </section>
  </section>
);

export default SideBar;
