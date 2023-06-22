import { Students } from '@/types/students/students.type'
import { http } from '@/utils/http'

export const URL_GET_STUDENTS = 'general-infos?sort=id'

export const studentsApi = {
  getStudents() {
    return http.get<Students>(URL_GET_STUDENTS)
  }
}
