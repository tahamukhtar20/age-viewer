/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import Frame from '../Frame';

const ServerDisconnectFrame = ({
  refKey,
  isPinned,
  reqString,
  disconnectToDatabase,
  addFrame,
  addAlert,
  setCommand,
  resetMetaData,
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(() => disconnectToDatabase().then((response) => {
      if (response.type === 'database/disconnectToDatabase/fulfilled') {
        resetMetaData();
      }
    }));
    /* dispatch(() => addFrame(':server connect')); */
    /* dispatch(() => addAlert('NoticeServerDisconnected')); */
  }, [dispatch, disconnectToDatabase, addFrame, addAlert]);

  return (
    <Frame
      reqString={reqString}
      isPinned={isPinned}
      refKey={refKey}
    >
      <h3>Disconnected Succesfully</h3>
      <p>You are successfully disconnected from Database.</p>
      <p>
        You may run&nbsp;
        <a href="/#" className="badge badge-light" onClick={() => { setCommand(':server connect'); }}>
          <FontAwesomeIcon
            icon={faPlayCircle}
            size="lg"
          />
          :server connection
        </a>
        {' '}
        to establish new connection
      </p>

    </Frame>
  );
};

ServerDisconnectFrame.propTypes = {
  refKey: PropTypes.string.isRequired,
  isPinned: PropTypes.bool.isRequired,
  reqString: PropTypes.string.isRequired,
  disconnectToDatabase: PropTypes.func.isRequired,
  addFrame: PropTypes.func.isRequired,
  addAlert: PropTypes.func.isRequired,
  setCommand: PropTypes.func.isRequired,
  resetMetaData: PropTypes.func.isRequired,
};

export default ServerDisconnectFrame;
