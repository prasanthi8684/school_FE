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
  contactNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
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
    contactNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
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
      if (response.status === 201) {
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
              onClick={() => navigate("/home")}
              style={{ cursor: "pointer" }}
            />
            <h2 className="text-center mb-4">Register</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <TextField
                    label="Full Name"
                    name="fullName"
                    placeholder="Enter name"
                    value={form.fullName}
                    onChange={handleChange}
                    error={errors.fullName}
                  />
                </Col>
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
                    label="Passout Batch"
                    name="passoutYear"
                    value={form.passoutYear}
                    onChange={handleChange}
                    error={errors.passoutYear}
                    options={[
                      { label: "2023", value: "2023" },
                      { label: "2022", value: "2022" },
                      { label: "2021", value: "2021" },
                      { label: "2020", value: "2020" },
                      { label: "2019", value: "2019" },
                      { label: "2018", value: "2018" },
                      { label: "2017", value: "2017" },
                      { label: "2016", value: "2016" },
                      { label: "2015", value: "2015" },
                      { label: "2014", value: "2014" },
                      { label: "2013", value: "2013" },
                      { label: "2012", value: "2012" },
                      { label: "2011", value: "2011" },
                      { label: "2010", value: "2010" },
                      { label: "2009", value: "2009" },
                      { label: "2008", value: "2008" },
                      { label: "2007", value: "2007" },
                      { label: "2006", value: "2006" },
                      { label: "2005", value: "2005" },
                      { label: "2004", value: "2004" },
                      { label: "2003", value: "2003" },
                      { label: "2002", value: "2002" },
                      { label: "2001", value: "2001" },
                      { label: "2000", value: "2000" },
                      { label: "1999", value: "1999" },
                      { label: "1998", value: "1998" },
                      { label: "1997", value: "1997" },
                    ]}
                  />
                </Col>
                <Col md={6}>
                  <SelectField
                    label="Working Field"
                    name="workingField"
                    value={form.workingField}
                    onChange={handleChange}
                    error={errors.workingField}
                    options={[
                      { label: "Business", value: "Business" },
                      { label: "Govt Job", value: "Govt Job" },
                      { label: "Job Search", value: "Job Search" },
                      { label: "Farming", value: "Farming" },
                      { label: "Own work", value: "Own work" },
                      { label: "Private Job", value: "Private Job" },
                      { label: "Studying", value: "Studying" },
                      { label: "Others", value: "Others" },
                    ]}
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
                      { label: "Bharma Colony", value: "Bharma Colony" },
                      { label: "Kakinada", value: "Kakinada" },
                      { label: "Kotturu", value: "Kotturu" },
                      { label: "Penumarti", value: "Penumarti" },
                      { label: "Rayudupalem", value: "Rayudupalem" },
                      { label: "Thammavaram", value: "Thammavaram" },
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
              <div className="text-center" style={{ marginTop: "20px" }}>
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
