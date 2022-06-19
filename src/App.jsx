import { useState } from 'react';
import { Routes, Route, Link, Navigate, useNavigate, useLocation } from 'react-router-dom';

import DOMTree from './views/Elements/DOMTree';
import DebuggingCSS from './views/Elements/DebuggingCSS';
import Commands from './views/Commands';
import InternalFunction from './views/Console/InternalFunction';
import ConsoleAPI from './views/Console/ConsoleAPI';
import InspectObjectProperties from './views/Console/InspectObjectProperties';
import DebugJavaScript from './views/Sources/DebugJavaScript';
import EditCSSAndJavaScript from './views/Sources/EditCSSAndJavaScript';
import Network from './views/Network';
import OtherPanels from './views/OtherPanels';
import FeedBack from './views/FeedBack';
const pages = [
  DOMTree,
  DebuggingCSS,
  Commands,
  InternalFunction,
  ConsoleAPI,
  InspectObjectProperties,
  DebugJavaScript,
  EditCSSAndJavaScript,
  Network,
  OtherPanels,
  FeedBack
];

export default function App() {
  const location = useLocation();
  const [pageNum, setPageNum] = useState(() => {
    const pageNum = Number(location.pathname.split('/')[1]) || 0;
    return pageNum < 0 ? 0 : pageNum;
  });
  const navigate = useNavigate();

  function prevPage() {
    setPageNum(pageNum - 1);
    navigate(`/${pageNum - 1}`);
  }
  function nextPage() {
    setPageNum(pageNum + 1);
    navigate(`/${pageNum + 1}`);
  }
  return (
    <div>
      <Routes>
        {pages.map((Page, index) => (
          <Route index={index === 0} key={index} path={`/${index}`} element={<Page />} />
        ))}
        <Route path="*" element={<Navigate to="/0" replace />} />
      </Routes>
      <div className="space-x-1">
        {pageNum > 0 && <button onClick={prevPage}>Prev</button>}
        {pageNum < pages.length - 1 && <button onClick={nextPage}>Next</button>}
      </div>
    </div>
  );
}
