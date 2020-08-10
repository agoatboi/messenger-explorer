import React, { useState } from 'react';
import utf8 from 'utf8';
import Thread from '@src/components/organisms/Thread';
import { IMessage } from '@src/interfaces/MessageInterfaces';
import { StyledBackupDropper } from './styled';

type objectOptions = {
  [key: string]: string;
};

export const BackupDropperTheme: objectOptions = {
  DEFAULT: 'DEFAULT',
  HIGHLIGHTED: 'HIGHLIGHTED',
};

type BackupDropperProps = {
  useTheme: string;
  message: string;
  onLoaded: React.SetStateAction<any>;
  children: React.ReactNode;
};

function BackupDropper({ useTheme, message, onLoaded }: BackupDropperProps): JSX.Element {
  const [theme, setTheme] = useState(BackupDropperTheme.DEFAULT);
  return (
    <StyledBackupDropper
      useTheme={theme}
      onDragEnter={(e) => {
        setTheme(BackupDropperTheme.HIGHLIGHTED);
      }}
      onDragLeave={(e) => {
        setTheme(BackupDropperTheme.DEFAULT);
      }}
      onDragOver={(e) => {
        e.preventDefault();
      }}
      onDrop={(e) => {
        e.preventDefault();
        setTheme(BackupDropperTheme.DEFAULT);

        Array.from(e.dataTransfer.files)
          .filter((file) => file.type === 'application/json')
          .forEach(async (file) => {
            const raw = await file.text();
            // temporary workaround for JSON files, x2 parsing
            onLoaded(JSON.parse(utf8.decode(JSON.stringify(JSON.parse(raw)))));
          });
      }}
    >
      <h3>{message}</h3>
    </StyledBackupDropper>
  );
}

BackupDropper.defaultProps = {
  children: '',
  useTheme: BackupDropperTheme.DEFAULT,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onLoaded: () => {},
};

export default BackupDropper;
