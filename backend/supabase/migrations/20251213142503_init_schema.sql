-- ENUMS
CREATE TYPE role_enum AS ENUM ('ADMIN', 'VYAPARI', 'KARIGAR');

CREATE TYPE order_status_enum AS ENUM (
  'CREATED',
  'ASSIGNED',
  'ACCEPTED',
  'REJECTED',
  'IN_PROGRESS',
  'COMPLETED'
);

-- USERS
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT,
  role role_enum NOT NULL,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT now()
);

-- ORDERS
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_no TEXT UNIQUE NOT NULL,
  client_name TEXT,
  description TEXT,
  status order_status_enum DEFAULT 'CREATED',
  vyapari_id UUID REFERENCES users(id),
  karigar_id UUID REFERENCES users(id),
  due_date DATE,
  created_at TIMESTAMP DEFAULT now()
);

-- ORDER IMAGES
CREATE TABLE order_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  uploaded_by UUID REFERENCES users(id),
  uploaded_at TIMESTAMP DEFAULT now()
);

-- ORDER HISTORY
CREATE TABLE order_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id UUID REFERENCES orders(id),
  action TEXT,
  performed_by UUID REFERENCES users(id),
  performed_at TIMESTAMP DEFAULT now()
);
