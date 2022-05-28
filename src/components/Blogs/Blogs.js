import React from 'react';
import { Container } from 'react-bootstrap';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h2 className='section-title'>Blogs</h2>
                <div className="blog-wrapper">
                    <h4 className='blog-title'>Defference between Javascript and Node JS?</h4>
                    <p>Javascript is programing language which is used to add functionality on a website. On the other hand, Node JS is a Javascript runtime environment which is built on Chrome's V8 Javascript engine. We can run Javascript only in the broweser. But Node JS helps us to run Javascript outside the browser. Generally we use Javascript on client side and Node JS on server side. Javascript is very much capable with HTML and we can do whatever we want on a website with DOM. But Node JS is not capable with HTML.</p>
                </div>
                <div className="blog-wrapper">
                    <h4 className='blog-title'>When should you use Node JS and when should you use MongoDB?</h4>
                    <p>Node JS is a Javascript runtime environment. We use Node Js to run Javascript outside the browser. Node JS is a server side language. We use Node JS to create server to run our website. On the other hand, MongoDB is a database service provider. It is a noSQL database. We often need to store data in database. That time we use MongoDB to store our data.</p>
                </div>
                <div className="blog-wrapper">
                    <h4 className='blog-title'>Deferences between SQL and NoSQL databases?</h4>
                    <p>SQL is a Relational Database Management System and NoSQL is a non-relational database system which is destributed. SQL has a static or predefined schema and noSQL has a dynamit schema. SQL is unelegible for hierarchical data storage and noSQL is elegible for hierarchical data storage. SQL is best for complex queries but noSQL is not best for complex queries.</p>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;