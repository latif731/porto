import React from 'react'
import './education.css'

const Education = () => {
  return (
    <table>
        <thead>
            <tr>
                <th>Jenjang Pendidikan</th>
                <th>Nama Sekolah</th>
                <th>Tahun Lulus</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>SMAN</td>
                <td>SMAN 1 Mejayan</td>
                <td>2014</td>
            </tr>
            <tr>
                <td>SMPN</td>
                <td>SMPN 1 Wonoasri</td>
                <td>2011</td>
            </tr>
            <tr>
                <td>SDN</td>
                <td>SDN Jatirejo</td>
                <td>2008</td>
            </tr>
        </tbody>
    </table>
  )
}

export default Education