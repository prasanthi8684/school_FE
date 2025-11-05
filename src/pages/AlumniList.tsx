import React, { useEffect, useState } from "react";
import {
  Table,
  Form,
  Row,
  Col,
  Pagination,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import axios from "axios";

interface Alumni {
  name: string;
  contactNumber: string;
  email: string;
  passoutYear: string;
  village: string;
  address: string;
  gender: string;
}

const dummyApi = async (): Promise<Alumni[]> => {
  try {
    const response = await axios.get("http://134.209.159.74:3000/api/users");
    //console.log("Alumni API response:", response);
    const users = response.data.users;
    console.log("Alumni API response:", users);
    if (!Array.isArray(users)) return [];

    // Normalize API response into Alumni[] shape
    return users.map((u: any) => ({
      name:
        u.displayName ??
        [u.displayName, u.fullName].filter(Boolean).join(" ").trim() ??
        "Unknown",
      contactNumber: u.contactNumber ?? u.phone ?? "",
      email: u.email ?? "",
      passoutYear: u.passoutYear ?? u.graduationYear ?? "",
      village: u.village ?? u.town ?? "",
      address: u.address ?? "",
      gender: u.gender ?? "",
    }));
  } catch (error) {
    console.error("Failed to fetch alumni data from /api/users", error);
    return [];
  }
};

export const AlumniList: React.FC = () => {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    village: "",
    passoutYear: "",
    gender: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const data = await dummyApi();
      setAlumni(data);
    };
    fetchData();
  }, []);

  const handleSearch = (value: string) => setSearch(value);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredData = alumni.filter((a) => {
    return (
      (!filters.village || a.village === filters.village) &&
      (!filters.passoutYear || a.passoutYear === filters.passoutYear) &&
      (!filters.gender || a.gender === filters.gender) &&
      (a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.email.toLowerCase().includes(search.toLowerCase()))
    );
  });

  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  console.log("full details", JSON.stringify(paginatedData));

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-3">
      <h2 className="text-center mb-4">Alumni List</h2>
      <Row className="mb-3">
        <Col md={3}>
          <InputGroup>
            <FormControl
              placeholder="Search by Name or Email"
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </InputGroup>
        </Col>
        <Col md={3}>
          <Form.Select
            name="passoutYear"
            onChange={handleFilterChange}
            value={filters.passoutYear}
          >
            <option value="">All Years</option>
            {Array.from({ length: 10 }, (_, i) => (
              <option key={i}>{`20${10 + i}`}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            name="village"
            onChange={handleFilterChange}
            value={filters.village}
          >
            <option value="">All Villages</option>
            <option>Village A</option>
            <option>Village B</option>
            <option>Village C</option>
          </Form.Select>
        </Col>
        <Col md={3}>
          <Form.Select
            name="gender"
            onChange={handleFilterChange}
            value={filters.gender}
          >
            <option value="">All Genders</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Select>
        </Col>
      </Row>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Number</th>
            <th>Email</th>
            <th>Passout Year</th>
            <th>Village</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.contactNumber}</td>
              <td>{item.email}</td>
              <td>{item.passoutYear}</td>
              <td>{item.village}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Pagination className="justify-content-center">
        <Pagination.Prev
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        />
      </Pagination>
    </div>
  );
};

export default AlumniList;
