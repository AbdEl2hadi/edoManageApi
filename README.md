# edoManageApi

Express.js backend API for edo management system.

## Features

- RESTful API endpoints
- User management (CRUD operations)
- Item management (CRUD operations)
- CORS enabled
- Environment-based configuration
- Middleware support (logging, authentication)
- In-memory data storage (easily replaceable with database)

## Project Structure

```
edoManageApi/
├── server.js              # Main server entry point
├── package.json           # Dependencies and scripts
├── .env.example          # Environment variables template
├── .gitignore            # Git ignore rules
├── config/               # Configuration files
│   ├── config.js         # Application config
│   └── database.js       # Database config
├── routes/               # API routes
│   └── api.js            # Main API routes
├── controllers/          # Request handlers
│   ├── userController.js # User CRUD operations
│   └── itemController.js # Item CRUD operations
├── models/              # Data models
│   ├── User.js          # User model
│   └── Item.js          # Item model
└── middleware/          # Custom middleware
    ├── logger.js        # Request logger
    └── auth.js          # Authentication middleware
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AbdEl2hadi/edoManageApi.git
cd edoManageApi
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file from the example:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env` file.

## Usage

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Root
- `GET /` - Welcome message and API information

### Health Check
- `GET /api/health` - Server health status

### Users
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Items
- `GET /api/items` - Get all items
- `GET /api/items/:id` - Get item by ID
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## API Examples

### Create User
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","role":"user"}'
```

### Get All Users
```bash
curl http://localhost:3000/api/users
```

### Create Item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Item 1","description":"Description","quantity":10,"price":99.99}'
```

### Get All Items
```bash
curl http://localhost:3000/api/items
```

## Response Format

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Operation successful"
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment (development/production/test)
- `DB_HOST` - Database host (for future database integration)
- `DB_PORT` - Database port
- `DB_NAME` - Database name
- `DB_USER` - Database user
- `DB_PASSWORD` - Database password
- `JWT_SECRET` - JWT secret key (for authentication)

## Technologies Used

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **dotenv** - Environment variables management
- **cors** - Cross-Origin Resource Sharing
- **body-parser** - Request body parsing
- **nodemon** - Development auto-restart

## Future Enhancements

- Database integration (PostgreSQL, MongoDB, etc.)
- JWT authentication
- Input validation
- Rate limiting
- API documentation (Swagger/OpenAPI)
- Unit and integration tests
- Logging system
- Error tracking

## License

ISC