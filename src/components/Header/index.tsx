
import { Box, Container } from '@material-ui/core';
import { history } from 'utils/history';

export const Header: React.FC = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }}>
        <div className="container">
          <div className="flex-left">
            <button
                className="button"
                type="button"
                onClick={() => {
                    history.push("/")
                }}
            >
                <img  src="#" alt="Global Pedia" />
            </button>
            <button
                className="button"
                type="button"
                onClick={() => {
                    history.push("/player")
                }}
            >
              Players
            </button>
            <button
                className="button"
                type="button"
                onClick={() => {
                    history.push("/team")
                }}
            >
              Teams
            </button>
            <button
                className="button"
                type="button"
                onClick={() => {
                    history.push("/tournament")
                }}
            >
              Tournaments
            </button>
          </div>

        </div>
      </Box>
    </Container>
  );
};
