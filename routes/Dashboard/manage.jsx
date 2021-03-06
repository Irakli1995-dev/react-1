import {
  DailyPlan,
  TrainingFeed,
  CompanyPerformance,
  IndividualPerformance,
  TasksProjects,
} from '~/views/Dashboard/Manage/Manage'
import {
  Assignments,
  CareerDetail,
  CareerEdit,
  CareerList,
  Engagement,
  ManagerDashboard,
  CompanyPerformance as CompanyReview,
  IndividualPerformance as IndividualReview,
  CompanyTask,
  IndividualTask,
  CompanyTraining,
  IndividualTraining,
  CompanyTrainingSchedule,
  IndividualTrainingSchedule,
  AddTrainingSchedule,
  Certifications,
  CertificationDetail,
  CertificationEdit,
  Report,
  NewHireOrientation,
  Birthday,
  Anniversary,
  SignatureList,
  CompanyQuota,
  TrainingCompetency,
  IndividualQuota,
  QuotaDetail,
} from '~/views/Dashboard/Manage/Reports'
import {
  Employee as EmployeeInfo,
  Company as CompanyInfo,
  AddEmployee,
  AddCompany,
} from '~/views/Dashboard/Manage/Records'
import Landing from '~/views/Dashboard/Manage/Landing'
import { UserRoles } from '~/services/config'

const manageRoutes = [
  {
    path: '/hcm/hcm',
    auth: true,
    title: 'Workflows',
    name: 'hcm',
    header: true,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/daily-plan',
    auth: true,
    title: 'Daily',
    name: 'daily-plan',
    header: false,
    component: DailyPlan,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/tasks-projects',
    auth: true,
    title: 'Tasks',
    name: 'tasks-projects',
    header: false,
    component: TasksProjects,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/training-feed',
    auth: true,
    title: 'Training',
    name: 'training-feed',
    header: false,
    component: TrainingFeed,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/performance-reviews',
    auth: true,
    title: 'Scorecards',
    name: 'reviews',
    header: false,
    component: CompanyPerformance,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/performance-reviews/:id',
    auth: true,
    title: 'Scorecards',
    name: 'reviews',
    header: false,
    component: IndividualPerformance,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/reports',
    auth: true,
    title: 'Reports',
    name: 'reports',
    header: true,
    component: Report,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/reports',
    auth: true,
    title: 'All Reports',
    name: 'reports',
    header: false,
    component: Report,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-assignments',
    auth: true,
    title: 'Assignments',
    name: 'assignments',
    header: false,
    component: Assignments,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-careers',
    auth: true,
    title: 'Career',
    name: 'career',
    header: false,
    component: CareerList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-careers/:type/:id/view',
    auth: true,
    title: 'Career Detail',
    name: 'career-detail',
    header: false,
    component: CareerDetail,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-careers/:type/:id/edit',
    auth: true,
    title: 'Career Edit',
    name: 'career-edit',
    header: false,
    component: CareerEdit,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-certifications',
    auth: true,
    title: 'Certifications',
    name: 'certifications',
    header: false,
    component: Certifications,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-certifications/:userId/:id/view',
    auth: true,
    title: 'Certification Detail',
    name: 'certification-detail',
    header: false,
    component: CertificationDetail,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-certifications/:userId/:id/edit',
    auth: true,
    title: 'Edit Certification',
    name: 'certification-edit',
    header: false,
    component: CertificationEdit,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-engagement',
    auth: true,
    title: 'Engagement',
    name: 'engagement',
    header: false,
    component: Engagement,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-manager-dashboard',
    auth: true,
    title: 'Manager Dashboard',
    name: 'manager-dashboard',
    header: false,
    component: ManagerDashboard,
    show: true,
    permission: UserRoles.MANAGER,
  },
  {
    path: '/hcm/report-performance',
    auth: true,
    title: 'Performance',
    name: 'performance',
    header: false,
    component: CompanyReview,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-performance/:id',
    auth: true,
    title: 'Performance',
    name: 'performance',
    header: false,
    component: IndividualReview,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-signature',
    auth: true,
    title: 'Signature',
    name: 'signature',
    header: false,
    component: SignatureList,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-task',
    auth: true,
    title: 'Tasks',
    name: 'tasks',
    header: false,
    component: CompanyTask,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-task/:id',
    auth: true,
    title: 'Task Detail',
    name: 'task-detail',
    header: false,
    component: IndividualTask,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-training',
    auth: true,
    title: 'Training',
    name: 'training',
    header: false,
    component: CompanyTraining,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-training/:companyId/:userId',
    auth: true,
    title: 'Training Detail',
    name: 'training-detail',
    header: false,
    component: IndividualTraining,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-training-schedule',
    auth: true,
    title: 'Training Schedule',
    name: 'training-schedule',
    header: false,
    component: CompanyTrainingSchedule,
    show: true,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-training-schedule/:id',
    auth: true,
    title: 'Training Schedule Detail',
    name: 'training-schedule-detail',
    header: false,
    component: IndividualTrainingSchedule,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-add-training-schedule/:id',
    auth: true,
    title: 'Add Training Schedule',
    name: 'add-training-schedule',
    header: false,
    component: AddTrainingSchedule,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-quota',
    auth: true,
    title: 'Quota',
    name: 'quota',
    header: false,
    component: CompanyQuota,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-quota/:id',
    auth: true,
    title: 'Quota',
    name: 'quota',
    header: false,
    component: IndividualQuota,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-quota-employee/:id/:tab',
    auth: true,
    title: 'Quota',
    name: 'quota',
    header: false,
    component: QuotaDetail,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-anniversary',
    auth: true,
    title: 'Anniversary',
    name: 'anniversary',
    header: false,
    component: Anniversary,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-birthday',
    auth: true,
    title: 'Birthday',
    name: 'birthday',
    header: false,
    component: Birthday,
    show: false,
    permission: UserRoles.EMPLOYEE,
  },
  {
    path: '/hcm/report-new-hire-orientation',
    auth: true,
    title: 'New Hire Orientation',
    name: 'new-hire-orientation',
    header: false,
    component: NewHireOrientation,
    show: false,
    permission: UserRoles.MANAGER,
  },
  {
    path: '/hcm/report-training-competency',
    auth: true,
    title: 'Training Competency',
    name: 'training-competency',
    header: false,
    component: TrainingCompetency,
    show: false,
    permission: UserRoles.MANAGER,
  },

  {
    path: '/hcm/record-add-employee',
    auth: true,
    title: 'Add Employee',
    name: 'add-employee',
    header: false,
    component: AddEmployee,
    show: false,
    permission: UserRoles.MANAGER,
  },
  {
    path: '/hcm/record-add-company',
    auth: true,
    title: 'Add Company',
    name: 'add-company',
    header: false,
    component: AddCompany,
    show: true,
    permission: UserRoles.SUPER_ADMIN,
  },
  {
    redirect: true,
    path: '/hcm',
    to: '/hcm/training-feed',
    name: 'HCM',
    component: Landing,
    permission: UserRoles.EMPLOYEE,
  },
]

export default manageRoutes
