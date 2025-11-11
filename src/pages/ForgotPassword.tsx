// pages/Login.tsx
import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";
import TextField from "../components/TextField"; // ⬅ Import here

interface FormData {
  email: string;
  password: string;
  confirmPassword: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email format.";
    if (
      !form.password.match(/^[A-Za-z0-9!@#$%^&*]{4,}$/) ||
      /\s|,|\./.test(form.password)
    )
      newErrors.password = "Password must be min 4 characters.";
    if (!form.confirmPassword || form.confirmPassword.length < 4)
      newErrors.confirmPassword = "Confirm password must be min 4 characters.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword =
        "Confirm password should be same as passwords.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://134.209.159.74:3000/api/forgotpassword",
        form,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        toast.success("Login successful!");
        console.log(response);

        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("Login failed.");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "API error occurred.");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay">
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <Card className="p-4 login-card" style={{ maxWidth: "400px" }}>
            <X
              size={20}
              className="position-absolute top-0 end-0 m-3 cursor-pointer"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <h2 className="text-center mb-4">Forgot Password</h2>
            <p className="text-center text-muted mb-4">
              Please update your new password
            </p>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={12}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email address"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />

                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                  />
                  <TextField
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    error={errors.confirmPassword}
                  />
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" variant="primary" className="px-5">
                  Login
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Login;
