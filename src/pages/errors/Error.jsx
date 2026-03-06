import request from "../../api/apiClient";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Alert } from "@mui/material";
import { AlertTitle } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
export default function ErrorPage() {
  const [validationError, setValidationError] = useState({});

  function getValidationErrors() {
    request.error.get403Error().catch((data) => {
      setValidationError(data);
    });
  }
  console.log(validationError);
  return (
    <Box>
      {validationError?.errors && (
        <Alert severity="error">
          <AlertTitle>{validationError.message}</AlertTitle>
          <List>
            {validationError.errors.map((error, index) => (
              <ListItem key={index}>
                <ListItemText primary={error} />
              </ListItem>
            ))}
          </List>
        </Alert>
      )}
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => request.error.get400Error()}
      >
        Bad Request
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => request.error.get401Error()}
      >
        Unauthorized
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={getValidationErrors}
      >
        Validation Error
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => request.error.get404Error()}
      >
        Not Found
      </Button>
      <Button
        sx={{ mr: 2 }}
        variant="outlined"
        color="error"
        onClick={() => request.error.get500Error()}
      >
        Server Error
      </Button>
    </Box>
  );
}
