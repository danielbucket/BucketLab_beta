import styled from 'styled-components'

export const BodyContainer = styled.div`
  flex-grow: 1;
  display: flex;
  background-color: var(--banana-candy-yellow);

  .profile-select {
    display: flex;
    flex-direction: column;
    width: 30rem;
    justify-content: center;
    align-items: center;

    button {
      width: 100%;
      padding: .5rem;
      margin: .5rem;
      font-size: 2.5rem;
      border: .25rem solid var(--dark-blue);
      border-radius: 5px;
      cursor: pointer;
    }
  }

  .profile-view {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 10px;
    }

    p {
      font-size: 2rem;
      color: var(--dark-blue);
    }
}
`;