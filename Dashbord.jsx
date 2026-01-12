import React, { useState } from "react";
import { Container, Row, Col, Card, Table, Button, Form, Badge } from "react-bootstrap";
import { GiTomato, GiChickenOven } from "react-icons/gi";
import { FaEgg } from "react-icons/fa6";
const initialItems = [
  {
    id: 1,
    name: "Tomato",
    Image: <GiTomato fill="red" size={30} />,
    price: 120,
    stock: 5,
  },
  {
    id: 2,
    name: "Chicken",
    Image: <GiChickenOven fill="rgba(207,167,162,0.94)" size={30} />,
    price: 250,
    stock: 3,
  },
  {
    id: 3,
    name: "Egg",
    Image: <FaEgg fill="rgba(139,88,58,0.94)" size={30} />,
    price: 10,
    stock: 5,
  },
];

const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  window.location.reload();
};
function Dashboard() {
  const [items, setItems] = useState(initialItems);
  const [quantities, setQuantities] = useState({});
  const [errors, setErrors] = useState({});
  const [showAddForm, setShowAddForm] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    stock: "",
    type: "",
  });
  const iconMap = {
    tomato: <GiTomato fill="red" size={30} />,
    chicken: <GiChickenOven fill="rgba(207,167,162,0.94)" size={30} />,
    egg: <FaEgg fill="rgba(139,88,58,0.94)" size={30} />,
  };
  const handleQuantityChange = (id, value) => {
    if (value === "" || /^[0-9]+$/.test(value)) {
      setQuantities({ ...quantities, [id]: value });
      setErrors({ ...errors, [id]: "" });
    }
  };
 
  const handleAddItem = () => {
    if (!newItem.name || !newItem.price || !newItem.stock || !newItem.type) {
      alert("Fill all fields");
      return;
    }

    setItems([
      ...items,
      {
        id: items.length + 1,
        name: newItem.name,
        price: Number(newItem.price),
        stock: Number(newItem.stock),
        Image: iconMap[newItem.type],
      },
    ]);

    setNewItem({ name: "", price: "", stock: "", type: "" });
    setShowAddForm(false);
  };
  const totalStock = items.reduce((sum, i) => sum + i.stock, 0);
  const activeItems = items.filter((i) => i.stock > 0).length;
  const outOfStockItems = items.filter((i) => i.stock === 0).length;
const placeOrder = (item) => {
  const qty = parseInt(quantities[item.id] || 0, 10);

  if (qty <= 0) {
    setErrors({ ...errors, [item.id]: "Enter valid quantity" });
    return;
  }

  if (qty > item.stock) {
    setErrors({ ...errors, [item.id]: "Not enough stock" });
    return;
  }

  setItems(
    items.map((i) =>
      i.id === item.id ? { ...i, stock: i.stock - qty } : i
    )
  );

  setQuantities({ ...quantities, [item.id]: "" });

  // ✅ success message
  setSuccessMsg(`${item.name} order placed successfully`);

  setTimeout(() => {
    setSuccessMsg("");
  }, 3000);
};

  return (
    <Container fluid className="p-4">
      <Row className="align-items-center mb-4">
        <Col>
          <h2>Inventory Dashboard</h2>
        </Col>
        <Col className="text-end">
          <Button className="bg-danger" onClick={handleLogout}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row className="mb-4 g-3">
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Total Stock</Card.Title>
              <h3>{totalStock}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Active Items</Card.Title>
              <h3>{activeItems}</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center shadow">
            <Card.Body>
              <Card.Title>Out of Stock</Card.Title>
              <h3>{outOfStockItems}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Button
        className="mb-3  bg-success"
        onClick={() => setShowAddForm(!showAddForm)}
      >
        {showAddForm ? "Close" : "Add Item"}
      </Button>
      {successMsg && (
  <div className="alert alert-success text-center">
    {successMsg}
  </div>
)}

      {showAddForm && (
        <Card className="mb-4 shadow">
          <Card.Body>
            <Row className="g-3">
              <Col md={3}>
                <Form.Control
                  placeholder="Item Name"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <Form.Control
                  type="number"
                  placeholder="Price"
                  value={newItem.price}
                  onChange={(e) =>
                    setNewItem({ ...newItem, price: e.target.value })
                  }
                />
              </Col>
              <Col md={2}>
                <Form.Control
                  type="number"
                  placeholder="Stock"
                  value={newItem.stock}
                  onChange={(e) =>
                    setNewItem({ ...newItem, stock: e.target.value })
                  }
                />
              </Col>
              <Col md={3}>
                <Form.Select
                  value={newItem.type}
                  onChange={(e) =>
                    setNewItem({ ...newItem, type: e.target.value })
                  }
                >
                  <option value="">Select Item</option>
                  <option value="tomato">Tomato</option>
                  <option value="chicken">Chicken</option>
                  <option value="egg">Egg</option>
                </Form.Select>
              </Col>
              <Col md={2}>
                <Button  className="w-100 bg-primary" onClick={handleAddItem}>
                  Save
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      )}
      <Card className="shadow">
        <Table responsive bordered hover className="text-center mb-0">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Image</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th>Qty</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.Image}</td>
                <td>₹{item.price}</td>
                <td>{item.stock}</td>
                <td>
                  <Badge bg={item.stock > 0 ? "success" : "danger"}>
                    {item.stock > 0 ? "Available" : "Out of Stock"}
                  </Badge>
                </td>
                <td style={{ maxWidth: 120 }}>
                  <Form.Control
                    type="number"
                    value={quantities[item.id] || ""}
                    disabled={item.stock === 0}
                    onChange={(e) =>
                      handleQuantityChange(item.id, e.target.value)
                    }
                  />
                  {errors[item.id] && (
                    <small className="text-danger">{errors[item.id]}</small>
                  )}
                </td>
                <td>
                  <Button
                   className="bg-primary"
                    disabled={item.stock === 0 || !quantities[item.id]}
                    onClick={() => placeOrder(item)}
                  >
                    Place Order
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default Dashboard;
