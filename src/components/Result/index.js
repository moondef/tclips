import React from 'react';
import styled from 'styled-components';

import { Button } from '../Button';

export const Result = ({ title, broadcaster, preview, download_link }) => {
  return (
    <ResultWrapper>
      <Title>{title}</Title>
      <Broadcaster>{broadcaster}</Broadcaster>
      <Preview src={preview} alt="Preview" />
      <div>
        <DownloadLink id="download-link">{download_link}</DownloadLink>

        <Download href={download_link}>Click to download</Download>

        <Download className="copy" data-clipboard-action="copy" data-clipboard-target="#download-link">Copy</Download>
      </div>
    </ResultWrapper>
  );
}

const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 480px;
`;

const Title = styled.h2`
  font-size: 1.1rem;
`;

const Broadcaster = styled.span`
  font-size: 0.8rem;
  color: #5e5e5e;
  margin-bottom: 3px;
`;

const Preview = styled.img`
  width: 480px;
  margin-bottom: 11px;

  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;

const DownloadLink = styled.p`
  background-color: #e2e2e2;
  border-radius: 5px;
  border: 1px solid #bcbcbc;
  padding: 5px;
  margin-bottom: 15px;
`;

const Download = styled.a`
  background-color: #6441a5;
  text-decoration: none;
  color: #fff;
  padding: 6px 10px 6px;
  margin-right: 6px;
  border-radius: 2px;
  cursor: pointer;
`;
