import React from 'react';
import firebase from 'firebase/app';
import { Container, Grid, Row, Panel, Button, Icon, Alert } from 'rsuite';
import Col from 'rsuite/lib/Col';
import { auth, database } from '../misc/firebase';

const SigIn = () => {
  const SignInWithProvider = async provider => {
    try {
      const { additionalUserInfo, user } = await auth.signInWithPopup(provider);

      if (additionalUserInfo.isNewuser) {
        await database.ref(`/profiles/${user.uid}`).set({
          name: user.displayName,
          createAt: firebase.database.ServerValue.TIMESTAMP,
        });
      }

      Alert.success('Signed In', 4000);
    } catch (err) {
      Alert.info(err.message, 4000);
    }
  };

  const onFacebookSigIn = () => {
    SignInWithProvider(new firebase.auth.FacebookAuthProvider());
  };

  const onGoogleSigIn = () => {
    SignInWithProvider(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <Container>
      <Grid className="mt-page">
        <Row>
          <Col xs={24} md={12} mdoffset={6}>
            <Panel>
              <div className="text-center">
                <h2>welcome to chat</h2>
                <p>Progressive chat platform for neophytes</p>
              </div>

              <div className="mt-3">
                <Button block color="blue" onClick={onFacebookSigIn}>
                  <Icon icon="facebook" />
                  Continue with Facebook
                </Button>

                <Button block color="green" onClick={onGoogleSigIn}>
                  <Icon icon="google" />
                  Continue with Google
                </Button>
              </div>
            </Panel>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
};

export default SigIn;
