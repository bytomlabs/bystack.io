import React from 'react';
import css from 'styled-components';

const base_download_link = 'https://mirrors.tuna.tsinghua.edu.cn/osdn/bytom/71014/';

const links = [
  {
    name: 'bytom-wallet-desktop-1.0.9-mac.zip	',
    hash: '16fcaa1b55801c74b31bc0a0282c6bc3',
  },
  {
    name: 'bytom-wallet-desktop-1.0.9-win-ia32.zip',
    hash: '	037408d9e2a923da380781c8345ef244',
  },
  {
    name: 'bytom-wallet-desktop-1.0.9-win-x64.zip',
    hash: '	51659d80ebec1745f16ce96b9894c52d',
  },
  {
    name: 'bytom-wallet-desktop-1.0.9-linux-ia32.zip',
    hash: '	ec21a1abe16314b515dcb0dc5c603e76',
  },
  {
    name: 'bytom-wallet-desktop-1.0.9-linux-x64.zip',
    hash: '	ac5073f4a563f021e56a746dac0c160e',
  },
];
const Wrap = css.div`
  padding: 20px 10px;
`;
const Table = css.table`
  td, th{
    padding: 5px 10px;
    border: 1px solid #ddd;
    font-size: 12px;
  }
`;



export default function Wallet({ isZh }) {
  return (
    <Wrap>
      <Table>
        <thead>
          <tr>
            <th>Bytom Wallet for Desktop</th>
            <th>MD5</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            links.map(item => (
              <tr>
                <td>{item.name}</td>
                <td>{item.hash}</td>
                <td><a href={`${base_download_link}${item.name}`}>{isZh ? '下载' : 'Download'}</a></td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </Wrap>
  )
}
