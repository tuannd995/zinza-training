import React from 'react';
import Login from 'components/Login';
import Dashboard from 'components/Dashboard';
import Admin from 'layout/Admin';
import Users from 'components/Users';
import UserForm from 'components/UserForm';
import Route from './Route';
import { Role } from 'utils/types';
import { useParams } from 'react-router';
import NotFoundPage from 'components/NotFound';
import UserProfile from 'components/UserProfile';
import UserEditInfo from 'components/UserProfile/UserEditInfo';
import ListProjects from 'components/ListProjects';
import CreateProject from 'components/CreateProject';
import ProjectDetail from 'components/ProjectDetail';

const routes = [
   <Route key="login" exact path="/login" component={Login} />,
   <Route
      withAuth
      layout={Admin}
      roles={[Role.Admin]}
      path={`/users/create`}
      component={() => <UserForm />}
      exact
      key="Userform"
   />,
   <Route
      withAuth
      layout={Admin}
      roles={[Role.Admin]}
      path={`/users/:id/update`}
      component={() => {
         const params = useParams();
         if (params['id'] && Number(params['id'])) {
            const id = Number(params['id']);
            return <UserForm id={id} />;
         } else {
            return <NotFoundPage />;
         }
      }}
      key="Userform"
   />,
   <Route
      withAuth
      layout={Admin}
      roles={[Role.Member, Role.PM]}
      path={`/users/:id/edit`}
      component={() => {
         const params = useParams();
         if (params['id'] && Number(params['id'])) {
            const id = Number(params['id']);
            return <UserEditInfo id={id} />;
         } else {
            return <NotFoundPage />;
         }
      }}
      key="Userform"
   />,
   <Route
      key="userprofile"
      path="/users/:id/details"
      exact
      withAuth
      layout={Admin}
      roles={[Role.Admin, Role.Member, Role.PM]}
      component={() => {
         const params = useParams();
         if (params['id'] && Number(params['id'])) {
            const id = Number(params['id']);
            return <UserProfile id={id} />;
         } else {
            return <NotFoundPage />;
         }
      }}
   />,

   <Route
      key="users"
      path="/users"
      exact
      withAuth
      component={Users}
      layout={Admin}
      roles={[Role.Admin]}
   />,
   <Route
      key="users"
      path="/projects/create"
      exact
      withAuth
      component={CreateProject}
      layout={Admin}
      roles={[Role.Admin]}
   />,

   <Route
      key="users"
      path="/projects/:id"
      withAuth
      component={() => {
         const params = useParams();
         if (params['id'] && Number(params['id'])) {
            const id = Number(params['id']);
            return <ProjectDetail id={id} />;
         } else {
            return <NotFoundPage />;
         }
      }}
      layout={Admin}
      roles={[Role.Admin, Role.Member, Role.PM]}
   />,
   <Route
      key="users"
      path="/projects"
      exact
      withAuth
      component={ListProjects}
      layout={Admin}
      roles={[Role.PM, Role.Member, Role.Admin]}
   />,
   <Route
      key="dashboard"
      exact
      path="/"
      withAuth
      component={Dashboard}
      layout={Admin}
      roles={[Role.Admin, Role.PM, Role.Member]}
   />,
];

export default routes;
