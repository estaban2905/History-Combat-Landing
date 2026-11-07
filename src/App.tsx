/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SiteLayout } from './layouts/SiteLayout';
import { HomePage } from './pages/HomePage';
import {
  DownloadPage,
  FaqPage,
  HowToPlayPage,
  LegalPage,
  ModesPage,
  NotFoundPage,
  RankingPage,
  RosterPage,
  StoryPage,
} from './pages/ContentPages';
import { PlayerPage } from './pages/PlayerPage';
import { LoginPage } from './pages/LoginPage';
import { AccountLayout } from './pages/account/AccountLayout';
import { Overview } from './pages/account/Overview';
import { Matches } from './pages/account/Matches';
import { Achievements } from './pages/account/Achievements';
import { Story } from './pages/account/Story';
import { Seasons } from './pages/account/Seasons';
import { Settings } from './pages/account/Settings';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="historia" element={<StoryPage />} />
        <Route path="plantel" element={<RosterPage />} />
        <Route path="como-jugar" element={<HowToPlayPage />} />
        <Route path="modos" element={<ModesPage />} />
        <Route path="ranking" element={<RankingPage />} />
        <Route path="jugador/:username" element={<PlayerPage />} />
        <Route path="descargar" element={<DownloadPage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="legal" element={<LegalPage />} />
        <Route path="entrar" element={<LoginPage />} />
        <Route path="cuenta" element={<AccountLayout />}>
          <Route index element={<Overview />} />
          <Route path="partidas" element={<Matches />} />
          <Route path="logros" element={<Achievements />} />
          <Route path="historia" element={<Story />} />
          <Route path="temporadas" element={<Seasons />} />
          <Route path="ajustes" element={<Settings />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
