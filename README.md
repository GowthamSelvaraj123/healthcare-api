  <h1>Healthcare Management API</h1>
  <p>This is a RESTful API built using <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong> for managing healthcare-related operations like patients, doctors, appointments, authentication, and more.</p>

  <h2>🔧 Technologies</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB + Mongoose</li>
    <li>JWT Authentication</li>
    <li>Nodemailer</li>
    <li>RESTful APIs</li>
  </ul>

  <h2>📁 Folder Structure</h2>
  <pre><code>
healthcare-api/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── validations/
├── utils/
├── app.js
├── server.js
├── .env
├── package.json
  </code></pre>

  <h2>🧪 API Endpoints</h2>

  <h3>Auth</h3>
  <ul>
    <li>POST <code>/api/auth/register</code></li>
    <li>POST <code>/api/auth/login</code></li>
    <li>GET <code>/api/auth/profile</code> (protected)</li>
    <li>PUT <code>/api/auth/profile</code> (protected)</li>
    <li>POST <code>/api/auth/forgot-password</code></li>
    <li>POST <code>/api/auth/reset-password/:token</code></li>
  </ul>

  <h3>Patients</h3>
  <ul>
    <li>GET <code>/api/patients</code></li>
    <li>GET <code>/api/patients/:id</code></li>
    <li>POST <code>/api/patients</code></li>
    <li>PUT <code>/api/patients/:id</code></li>
    <li>DELETE <code>/api/patients/:id</code></li>
  </ul>

  <h3>Doctors</h3>
  <ul>
    <li>GET <code>/api/doctors</code></li>
    <li>GET <code>/api/doctors/:id</code></li>
    <li>POST <code>/api/doctors</code></li>
    <li>PUT <code>/api/doctors/:id</code></li>
    <li>DELETE <code>/api/doctors/:id</code></li>
  </ul>

  <h3>Appointments</h3>
  <ul>
    <li>GET <code>/api/appointments</code></li>
    <li>GET <code>/api/appointments/:id</code></li>
    <li>POST <code>/api/appointments</code></li>
    <li>PUT <code>/api/appointments/:id</code></li>
    <li>DELETE <code>/api/appointments/:id</code></li>
  </ul>

  <h2>🔐 JWT Authentication</h2>
  <p>Secure routes with an <code>Authorization: Bearer &lt;token&gt;</code> header.</p>

  <h2>📦 Environment Variables (.env)</h2>
  <pre><code>
PORT=5000
MONGO_URI=mongodb://localhost:27017/healthcare
JWT_SECRET=your_secret_key
MAIL_USER=your_email@gmail.com
MAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
  </code></pre>

  <h2>🚀 Running the Server</h2>
  <pre><code>
npm install
npm run dev
  </code></pre>

  <h2>📮 Contact</h2>
