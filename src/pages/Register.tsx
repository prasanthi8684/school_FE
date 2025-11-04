import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Card } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import TextField from "../components/TextField";
import SelectField from "../components/SelectField";
import { X } from "lucide-react";

interface FormData {
  fullName: string;
  displayName: string;
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  aadhar: string;
  address: string;
  gender: string;
  passoutYear: string;
  workingField: string;
  village: string;
}

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    fullName: "",
    displayName: "",
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    aadhar: "",
    address: "",
    gender: "",
    passoutYear: "",
    workingField: "",
    village: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.fullName) newErrors.fullName = "Full name is required.";
    if (!form.displayName) newErrors.displayName = "Display name is required.";
    if (!form.contactNumber.match(/^\d{10}$/))
      newErrors.contactNumber = "Invalid contact number.";
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email format.";
    if (!form.password || form.password.length < 4)
      newErrors.password = "Password must be at least 4 characters.";
    if (!form.confirmPassword || form.confirmPassword.length < 4)
      newErrors.confirmPassword =
        "Confirm password must be at least 4 characters.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword =
        "Confirm password should be same as passwords.";
    if (!form.aadhar.match(/^\d{12}$/))
      newErrors.aadhar = "Invalid Aadhar number.";
    if (!form.address) newErrors.address = "Address is required.";
    if (!form.gender) newErrors.gender = "Gender is required.";
    if (!form.passoutYear) newErrors.passoutYear = "Passout year is required.";
    if (!form.workingField)
      newErrors.workingField = "Working field is required.";
    if (!form.village) newErrors.village = "Village is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await axios.post(
        "http://134.209.159.74:3000/api/signup",
        form, 
        { headers: { "Content-Type": "application/json" } }
      );
      if (response.status == 201) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        toast.error("Registration failed.");
      }
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "API error occurred.");
    }
  };

  return (
    <div className="login-page">
      <div className="overlay">
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
          <Card className="p-4 w-100" style={{ maxWidth: "900px" }}>
            <X
              size={20}
              className="position-absolute top-0 end-0 m-3 cursor-pointer"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter name as per Aadhar"
                    value={form.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Display Name"
                    name="displayName"
                    placeholder="Enter display name"
                    value={form.displayName}
                    onChange={handleChange}
                    error={errors.displayName}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <TextField
                    label="Contact Number"
                    name="contactNumber"
                    placeholder="Enter 10-digit number"
                    value={form.contactNumber}
                    onChange={handleChange}
                    error={errors.contactNumber}
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    value={form.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <TextField
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={form.password}
                    onChange={handleChange}
                    error={errors.password}
                  />
                </Col>
                <Col md={6}>
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
              <Row>
                <Col md={6}>
                  <SelectField
                    label="Gender"
                    name="gender"
                    value={form.gender}
                    onChange={handleChange}
                    error={errors.gender}
                    options={[
                      { label: "Male", value: "Male" },
                      { label: "Female", value: "Female" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Passout Year"
                    name="passoutYear"
                    value={form.passoutYear}
                    onChange={handleChange}
                    error={errors.passoutYear}
                    options={[
                      { label: "2020", value: "2020" },
                      { label: "2019", value: "2019" },
                      { label: "2018", value: "2018" },
                    ]}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <SelectField
                    label="Working Field"
                    name="workingField"
                    value={form.workingField}
                    onChange={handleChange}
                    error={errors.workingField}
                    options={[
                      { label: "Studying", value: "Studying" },
                      { label: "Job Search", value: "Job Search" },
                      { label: "Working", value: "Working" },
                      { label: "Other", value: "Other" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Aadhar Number"
                    name="aadhar"
                    placeholder="Enter 12-digit Aadhar"
                    value={form.aadhar}
                    onChange={handleChange}
                    error={errors.aadhar}
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <SelectField
                    label="Village"
                    name="village"
                    value={form.village}
                    onChange={handleChange}
                    error={errors.village}
                    options={[
                      { label: "Village A", value: "A" },
                      { label: "Village B", value: "B" },
                      { label: "Village C", value: "C" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <TextField
                    label="Full Address"
                    name="address"
                    placeholder="Enter full address"
                    value={form.address}
                    onChange={handleChange}
                    error={errors.address}
                  />
                </Col>
              </Row>
              <div className="text-center">
                <Button type="submit" variant="primary" className="px-5">
                  Register
                </Button>
              </div>
            </Form>
            <p className="text-center mt-3 text-muted">
              Already have an account? <Link to="/login">Login here</Link>
            </p>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Register;
