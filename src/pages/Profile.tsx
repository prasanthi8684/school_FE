import React, { useState } from "react";
import { Form, Button, Row, Col, Card, Container } from "react-bootstrap";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
import { X } from "lucide-react";

interface FormData {
  displayName: string;
  fullName: string;
  contactNumber: string;
  email: string;
  aadharNumber: string;
  workingField: string;
  village: string;
  fullAddress: string;
}

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState<FormData>({
    displayName: "",
    fullName: "",
    contactNumber: "+91",
    email: "",
    aadharNumber: "",
    workingField: "",
    village: "",
    fullAddress: "",
  });

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
      // read user id from sessionStorage (supports either a raw id stored under "userId"
      // or a JSON "user" object that contains an id/userId field)
      console.log("Fetching profile...");
      console.log(localStorage.getItem("userId"))
      const userId = localStorage.getItem("userId");
     

        if (!userId) {
          toast.error("No user found in session. Please login.");
          navigate("/login");
          return;
        }

        const { data } = await axios.get(`http://134.209.159.74:3000/api/profile/${encodeURIComponent(userId)}`);
        setForm({
          displayName: data?.user?.displayName ?? "",
          fullName: data?.user?.fullName ?? "",
          contactNumber: data?.user?.contactNumber
            ? data.user.contactNumber.startsWith("+91")
              ? data.user.contactNumber
              : `+91${String(data.user.contactNumber).replace(/^0+/, "")}`
            : "+91",
          email: data?.user?.email ?? "",
          aadharNumber: data?.user?.aadharNumber ?? "",
          workingField: data?.user?.workingField ?? "",
          village: data?.user?.village ?? "",
          fullAddress: data?.user?.fullAddress ?? "",
        });
      } catch (error: any) {
        toast.error(error?.response?.data?.user?.message || "Failed to load profile.");
      }
    };

    fetchProfile();
  }, []);

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
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!form.displayName.trim())
      newErrors.displayName = "Display Name is required.";
    if (!form.contactNumber.match(/^\+91\d{10}$/))
      newErrors.contactNumber = "Enter valid 10-digit contact number with +91.";
    if (!form.aadharNumber.match(/^\d{12}$/))
      newErrors.aadharNumber = "Enter valid 12-digit Aadhar number.";
    if (!form.fullAddress.trim())
      newErrors.fullAddress = "Full address is required.";
    if (!form.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Invalid email format.";
    if (!form.workingField)
      newErrors.workingField = "Please select a working field.";
    if (!form.village) newErrors.village = "Please select a village.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const rawUser = localStorage.getItem("userId");
      let userId: string | null = rawUser;

      // support either a raw id or a JSON object containing id/userId
      try {
        if (rawUser) {
          const parsed = JSON.parse(rawUser);
          if (parsed && (parsed.id || parsed.userId)) {
        userId = parsed.id ?? parsed.userId;
          }
        }
      } catch {
        // ignore JSON parse errors, treat rawUser as plain id
      }

      if (!userId) {
        toast.error("No user found in session. Please login.");
        return;
      }

      const response = await axios.put(
        `http://134.209.159.74:3000/api/users/${encodeURIComponent(userId)}`,
        form
      );
      if (response.status === 200) {
        toast.success("Registration successful!");
        setTimeout(() => navigate("/home"), 2000);
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
          <Card className="p-4 login-card">
            <X
              size={20}
              className="position-absolute top-0 end-0 m-3 cursor-pointer"
              onClick={() => navigate("/")}
              style={{ cursor: "pointer" }}
            />
            <h2 className="text-center mb-4">Profile</h2>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Display Name</Form.Label>
                    <Form.Control
                      name="displayName"
                      placeholder="Enter short name"
                      value={form.displayName}
                      onChange={handleChange}
                      isInvalid={!!errors.displayName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.displayName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      placeholder="Enter name as per aadhar"
                      value={form.fullName}
                      onChange={handleChange}
                      isInvalid={!!errors.fullName}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fullName}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="contactNumber"
                      placeholder="Enter contact number"
                      value={form.contactNumber}
                      onChange={handleChange}
                      isInvalid={!!errors.contactNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.contactNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email address"
                      value={form.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Aadhar Number</Form.Label>
                    <Form.Control
                      type="text"
                      name="aadharNumber"
                      placeholder="Enter aadhar number"
                      value={form.aadharNumber}
                      onChange={handleChange}
                      isInvalid={!!errors.aadharNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.aadharNumber}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Working Field</Form.Label>
                    <Form.Select
                      name="workingField"
                      value={form.workingField}
                      onChange={handleChange}
                      isInvalid={!!errors.workingField}
                    >
                      <option value="">Please select working field</option>
                      <option value="studying">Studying</option>
                      <option value="jobSearch">Job Search</option>
                      <option value="farming">Farming</option>
                      <option value="privateJob">Private Job</option>
                      <option value="govtJob">Govt Job</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.village}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Village</Form.Label>
                    <Form.Select
                      name="village"
                      value={form.village}
                      onChange={handleChange}
                      isInvalid={!!errors.village}
                    >
                      <option value="">Please select village</option>
                      <option value="Village A">Village A</option>
                      <option value="Village B">Village B</option>
                      <option value="Village C">Village C</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      {errors.village}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Full address</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullAddress"
                      placeholder="Enter full address"
                      value={form.fullAddress}
                      onChange={handleChange}
                      isInvalid={!!errors.fullAddress}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.fullAddress}
                    </Form.Control.Feedback>
                  </Form.Group>
                </Col>
              </Row>

              <div className="text-center">
                <Button type="submit" variant="primary" className="px-5">
                  Update
                </Button>
              </div>
            </Form>
          </Card>
        </Container>
      </div>
    </div>
  );
};

export default Profile;
