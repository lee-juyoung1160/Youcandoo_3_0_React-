/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import Inner from '../../components/web/Inner'

export default function Privacy_v1_4(props) {
  const styles = props.style
  return (
    <article className={styles.terms}>
      <Inner>
        <h1>개인정보처리방침</h1>
        <p>
          (주)야나두(이하 "회사"라 함)는 정보통신서비스 제공자가 준수하여야 할
          대한민국의 관련 법령 및 개인정보보호 규정을 준수하며, 관련 법령에
          의거한 개인정보처리방침을 정하여 이용자 권익 보호에 최선을 다하고
          있습니다. 회사는 개인정보처리방침을 통하여 개인정보가 어떠한 목적과
          방식으로 이용되고 있으며, 개인정보보호를 위해 어떠한 조치가 취해지고
          있는지를 알려드립니다.
        </p>
        <div className={styles.box_el}>
          <strong>본 개인정보처리방침의 목차는 아래와 같습니다.</strong>
          <ol>
            <li>제1조 개인정보의 수집 및 이용목적</li>
            <li>제2조 개인정보의 보유 및 이용기간</li>
            <li>제3조 개인정보의 열람, 갱신, 수정 또는 삭제</li>
            <li>제4조 개인정보의 파기절차 및 방법</li>
            <li>제5조 수집한 개인정보의 위탁</li>
            <li>제6조 이용자 및 법정대리인의 권리와 그 행사방법</li>
            <li>
              제7조 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
            </li>
            <li>제8조 개인정보보호를 위한 기술적, 관리적 대책</li>
            <li>제9조 아동의 개인정보 보호</li>
            <li>제10조 개인정보보호 책임자 및 담당자의 소속, 성명 및 연락처</li>
          </ol>
        </div>
        <div className={styles.virtual_el}>
          <h2>제1조 개인정보 수집 및 이용목적</h2>
          <p>
            회사는 홈페이지 또는 개별 어플리케이션이나 프로그램에서 회원 가입 시
            또는 서비스를 이용하는 과정에서 서비스 제공을 위해 필요한 최소한의
            개인정보를 수집하고 있습니다. 이용자는 개인정보 수집 및 이용에
            동의하지 않을 권리가 있으며, 동의를 거부할 경우 회사가 제공하는
            서비스의 전부 또는 일부 이용에 제한이 있을 수 있습니다.
            <br />
            <br />
            개인정보의 수집 내용은 아래와 같습니다.
          </p>
          <ul className={styles.privacy_ul}>
            <li>
              <h3>[회원 가입] SNS 계정을 통합 통합회원 로그인 서비스</h3>
              <ul>
                <li>
                  - 필수 : 이름, 닉네임, 프로필 사진, 이메일 주소, 휴대전화번호,
                  암호화된 이용자 확인값(CI) 회원 가입을 위해 본인 인증이 필요한
                  경우 (SNS 계정을 통해 CI를 확인할 수 없을 때) 이름, 내/외국인
                  여부, 생년월일, 성별, 휴대전화번호, 통신사 등의 정보를 추가
                  수집할 수 있습니다.
                </li>
                <li>- 선택 : 성별, 연령대, 생년월일</li>
              </ul>
            </li>
            <li>
              <h3>[단체 회원 가입] 기업 및 단체 특성에 따른 서비스 제공</h3>
              <ul>
                <li>
                  - 필수 : 회사명/단체명, 담당자 이름, 담당자 휴대전화번호,
                  이메일 등
                </li>
                <li>- 선택 : 사업자 등록 번호</li>
              </ul>
            </li>
            <li>
              <h3>[주문/결제/배송] 주문 상품의 결제 및 환불, 배송 등</h3>
              <ol>
                <li>- 필수 :</li>
                <li>
                  ① 카드 결제 : 카드사명, 카드번호, 카드유효기간, 생년월일 또는
                  법인카드인 경우 사업자번호
                </li>
                <li>② 계좌이체 : 은행명, 계좌번호, 예금주</li>
                <li>
                  ③ 휴대전화번호 결제 : 통신사, 휴대전화번호, 결제승인번호
                </li>
                <li>
                  ④ 물품 배송 : 주문자 및 수취인의 이름, 주소, 휴대전화번호
                </li>
              </ol>
            </li>
            <li>
              <h3>[이벤트 응모] 이벤트 진행 및 고지사항 안내</h3>
              <ul>
                <li>- 필수 : 이름, 휴대전화번호</li>
              </ul>
            </li>
            <li>
              <h3>
                [환급] 목표달성에 따른 마일리지 또는 장학금 환급, 충전한
                마일리지 출금
              </h3>
              <ul>
                <li>
                  - 필수 : 아이디, 휴대전화번호, 목표달성 단계, 은행명,
                  계좌번호, 예금주, 생년월일
                </li>
                <li>
                  - 선택 (제세공과금 납부 필요 시) : 이름, 주민번호, 주소가
                  명시된 주민등록증 혹은 등본 사본
                </li>
              </ul>
            </li>
            <li>
              <h3>[고객 상담] 서비스 이용 상담 대응</h3>
              <ul>
                <li>
                  - 선택 : 이용자의 자발적 제공을 통한 이메일, 전화번호, 상담
                  내용
                </li>
              </ul>
            </li>
            <li>
              <h3>[제휴 문의] 서비스 이용 상담 대응</h3>
              <ul>
                <li>
                  - 선택 : 이용자의 자발적 제공을 통한 이메일, 전화번호, 상담
                  내용
                </li>
              </ul>
            </li>
            <li>
              <h3>
                [개인정보 변경] 앱 내에서 휴대전화번호 또는 SNS 계정 변경 등
              </h3>
              <ul>
                <li>
                  - 필수 : 이름, 내/외국인 여부, 생년월일, 성별, 휴대전화번호,
                  암호화된 이용자확인값(CI), 통신사
                </li>
              </ul>
            </li>
            <li>
              <h3>
                위의 정보 외에 서비스 이용 과정에서 아래와 같은 정보가 생성되어
                수집될 수 있습니다.
              </h3>
              <ul>
                <li>
                  - IP Address, 쿠키, 방문일자, 서비스 이용기록, 부정 이용기록,
                  기기식별 고유번호(예: 장치ID, 광고ID 등), 앱 버전, 단말기 정보
                  (모델명, OS 버전 등)
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.virtual_el}>
          <h2>제2조 개인정보의 보유 및 이용 기간</h2>
          <p>
            서비스 이용자가 당사의 회원으로서 서비스를 계속 이용하는 동안 당사는
            이용자의 개인정보를 계속 보유하며 서비스 제공 등을 위해 이용합니다.
            <br />
            <br />
            서비스 이용자의 개인정보는 그 수집 및 이용 목적(설문조사, 이벤트 등
            일시적인 목적을 포함)이 달성되거나 이용자가 직접 삭제 또는 회원
            탈퇴한 경우에 재생할 수 없는 방법으로 파기됩니다.
            <br />
            <br />
            참고로 "개인정보 유효기간제"에 따라 1년간 서비스를 이용하지 않은
            회원의 개인정보를 별도로 분리 보관하고 있습니다.
            <br />
            <br />
            당사는 이용자의 권리 남용, 악용 방지, 권리침해/명예훼손 분쟁 및
            수사협조 등의 요청이 있었을 경우에는 이의 재발에 대비하여 회원의
            이용계약 해지 시로부터 1년 동안 회원의 개인정보를 보관할 수
            있습니다.
            <br />
            <br />
            상법, 전자상거래 등에서의 소비자보호에 관한 법률 등 관계법령의
            규정에 의하여 보존할 필요가 있는 경우 당사는 관계법령에서 정한
            일정한 기간 동안 회원정보를 보관합니다. 이 경우 당사는 보관하는
            정보를 그 보관의 목적으로만 이용하며 보존기간은 아래와 같습니다.
          </p>
          <div className={styles.box_el}>
            <ul>
              <li>
                <h3>가. 회사 내부 방침에 의한 정보보유 사유</h3>
                회원탈퇴 시 개인정보 보존기간은 아래와 같습니다.
                <ul>
                  <li>
                    - 보존근거 : 불량 이용자의 재가입 방지, 명예훼손 등 권리침해
                    분쟁 및 수사협조
                  </li>
                  <li>- 보존기간 : 회원탈퇴 후 1년</li>
                </ul>
              </li>
              <li>
                <h3>나. 관련법령에 의한 정보보유 사유</h3>
                <ul>
                  <li>
                    상법, 전자상거래 등에서의 소비자보호에 관한 법률 등
                    관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는
                    관계법령에서 정한 일정한 기간 동안 회원정보를 보관합니다. 이
                    경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며
                    보존기간은 아래와 같습니다
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul className={styles.privacy_ul}>
            <li>
              <h3>계약 또는 청약철회 등에 관한 기록</h3>
              <ul>
                <li>
                  - 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                </li>
                <li>- 보존 기간 : 5년</li>
              </ul>
            </li>
            <li>
              <h3>대금결제 및 재화 등의 공급에 관한 기록</h3>
              <ul>
                <li>
                  - 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                </li>
                <li>- 보존 기간 : 5년</li>
              </ul>
            </li>
            <li>
              <h3>소비자의 불만 또는 분쟁처리에 관한 기록</h3>
              <ul>
                <li>
                  - 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                </li>
                <li>- 보존 기간 : 3년</li>
              </ul>
            </li>
            <li>
              <h3>본인확인에 관한 기록</h3>
              <ul>
                <li>
                  - 보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률
                </li>
                <li>-보존 기간 : 6개월</li>
              </ul>
            </li>
            <li>
              <h3>방문에 관한 기록</h3>
              <ul>
                <li>
                  - 보존 이유 : 정보통신망 이용촉진 및 정보보호 등에 관한 법률
                </li>
                <li>- 보존 기간 : 3개월</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.virtual_el}>
          <h2>제3조 개인정보의 열람, 갱신, 수정 또는 삭제</h2>
          <p>
            회원님은 등록되어 있는 고객의 개인정보를 열람하거나 수정하실 수
            있으며, 회원탈퇴를 요청하실 수 있습니다. 회원님의 개인정보 열람 및
            수정은 사이트 내의 회원정보변경을 통해 직접 열람 또는 수정하거나,
            개인정보 보호책임자 및 담당자에게 전자우편 또는 서면으로 요청하신
            경우 지체없이 조치하겠습니다.
          </p>
        </div>
        <div className={styles.virtual_el}>
          <h2>제4조 개인정보의 파기절차 및 방법</h2>
          <ul>
            <li>
              <h3>[파기절차]</h3>
              <ul>
                <li>
                  이용자가 회원가입 등을 위해 입력한 정보는 목적이 달성된 후
                  별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및
                  기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간
                  참조)일정 기간 저장된 후 파기됩니다. 동 개인정보는 법률에 의한
                  경우가 아니고서는 보유되는 이외의 다른 목적으로 이용되지
                  않습니다.
                </li>
              </ul>
            </li>
            <li>
              <h3>[파기방법]</h3>
              <ul>
                <li>
                  종이에 출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여
                  파기합니다. 전자적 파일 형태로 저장된 개인정보는 기록을 재생할
                  수 없는 기술적 방법을 사용하여 삭제합니다.
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className={styles.virtual_el}>
          <h2>제5조 수집한 개인정보의 위탁</h2>
          <p>회사의 개인정보 위탁처리 기관 및 위탁업무는 다음과 같습니다.</p>
          <table>
            <thead>
              <tr>
                <th>수탁업체</th>
                <th>위탁업무내용</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>(주)포유키즈</td>
                <td>서비스 물품 및 이벤트 경품 배송 등의 물류 업무</td>
              </tr>
              <tr>
                <td>
                  (주)KG이니시스, (주)네이버파이낸셜, (주)비바리퍼블리카,
                  한국정보통신(주), 엔에이치엔페이코(주), (주)카카오페이
                </td>
                <td>
                  결제처리(휴대폰, 무통장입금, 계좌이체, 신용카드, 지류상품권 및
                  기타 결제수단, 환불계좌 인증)
                </td>
              </tr>
              <tr>
                <td>(주)한국코퍼레이션, (주)일공일랩, (주)한국고용정보</td>
                <td>
                  회원관리 서비스(일반안내, 본인확인, 민원처리, 만족도조사 등
                  학습운영센터 업무), 마케팅(신규 서비스 및 이벤트, 광고),
                  수강안내 등 정보 전달
                </td>
              </tr>
              <tr>
                <td>(주)싸이웰시스템</td>
                <td>서버 호스팅 및 보안 관제</td>
              </tr>
              <tr>
                <td>(주)케이티엠하우스</td>
                <td>모바일상품권 발송</td>
              </tr>
              <tr>
                <td>NICE평가정보(주)</td>
                <td>본인 및 실명확인</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2">
                  * 개인정보의 보유 및 이용기간 : 회원탈퇴 시 혹은 위탁계약 종료
                  시 까지
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className={styles.virtual_el}>
          <h2>제6조 이용자 및 법정대리인의 권리와 그 행사방법</h2>
          <p>
            이용자 및 법정대리인은 언제든지 등록되어 있는 회원의 개인정보를
            열람하거나 수정할 수 있으며, 회원탈퇴 절차를 통하여 개인정보 이용에
            대한 동의를 철회할 수 있습니다.
            <br />
            <br />
            혹은 개인정보보호책임자에게 서면, 전화 또는 이메일로 연락하시면 지체
            없이 조치하겠습니다.
            <br />
            <br />
            이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을
            완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한
            잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리 결과를
            제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
            <br />
            <br />
            회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된
            개인정보는 “개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고
            그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.
          </p>
        </div>
        <div className={styles.virtual_el}>
          <h2>
            제7조 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
          </h2>
          <h3>
            쿠키(cookie)는 HTTP 서버에서 사용자 브라우저에게 보내는 조그마한
            데이터 파일로써 회원님의 컴퓨터에 저장됩니다.
          </h3>
          <p>
            회사는 이러한 쿠키(cookie)를 이용하여 회원님의 브라우저 형식이나
            서비스 이용 형태를 얻게 되며, 이러한 쿠키 정보를 바탕으로 회원님께
            유용하고 보다 편리한 맞춤서비스를 제공하는데 사용하게 됩니다.
            회원님은 쿠키에 대한 선택권을 가지고 있습니다. 회원님의
            웹브라우저에서 옵션을 선택함으로써 모든 쿠키를 허용하거나, 쿠키가
            저장될 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
            있습니다.
          </p>
          <h3>
            단, 쿠키의 저장을 거부하실 경우 로그인 (Log-in) 이 필요한 회사의 웹
            서비스는 이용하실 수 없게 됩니다.
          </h3>
          <p>
            회사의 서비스를 앱을 통해 실행 시 기기식별 고유번호(예: 장치 ID,
            광고ID 등), 단말기 정보를 자동으로 수집하게 됩니다. 이용자가
            기기식별 고유번호를 자동으로 수집하는 것을 거부하는 경우 회사에서
            제공한 서비스를 이용하실 수 없습니다.
          </p>
        </div>
        <div className={styles.virtual_el}>
          <h2>제8조 개인정보보호를 위한 기술적, 관리적 대책</h2>
          <p>
            회원님의 개인정보는 비밀번호에 의해 보호되고 있습니다. 회원님 계정의
            비밀번호는 오직 본인만이 알 수 있으며, 개인정보의 확인 및 변경도
            비밀번호를 알고 있는 본인에 의해서만 가능합니다.
            <br />
            <br />
            따라서 회원님의 비밀번호는 누구에게도 알려주면 안됩니다. 또한 작업을
            마치신 후에는 로그아웃(log-out)하시고 웹브라우저를 종료하는 것이
            바람직합니다.
            <br />
            <br />
            특히 다른 사람과 컴퓨터를 공유하여 사용하거나 공공장소에서 이용한
            경우 개인정보가 다른 사람에게 알려지는 것을 막기 위해서 이와 같은
            절차가 더욱 필요합니다. 이용자 부주의나 인터넷상의 문제로 인한
            개인정보 유출에 대해서 회사는 책임을 지지 않습니다.
            <br />
            <br />
            회사는 개인정보 취급 직원을 최소화하고 담당 직원의 수시교육을 통해
            개인정보 보호 정책의 준수를 강조하고 있습니다. 회사는 개인정보보호를
            위한 기술적 관리적 대책을 다음과 같이 시행하고 있습니다. 해킹 방지를
            위한 방화벽과 보안 시스템에 만전을 기하고 있습니다. 개인정보
            송수신시 SSL 보안서버 인증서를 설치하여 정보를 보호합니다.
            개인정보에의 접근은 해당 업무 수행자, 업무 수행 시 개인정보 취급이
            불가피한 자로 제한하여 그 이외의 직원이 접근하지 못하도록 하고
            있습니다.
          </p>
        </div>
        <div className={styles.virtual_el}>
          <h2>제9조 아동의 개인정보 보호</h2>
          <p>
            회사는 만 14세 미만 아동의 개인정보를 보호하기 위하여, 만 14세 미만
            아동의 회원가입은 제한합니다.
            <br />
            <br />
            회사는 만14세 미만 아동의 개인정보 처리에 대하여 법정대리인에게
            고지하여야 할 사유가 발생한 경우에는 행정안전부 고시 [개인정보
            보호지침]의 고지방법을 준수합니다.
            <br />
            <br />
            법정대리인은 만14세 미만 아동의 개인정보에 대한 열람, 수정 및 삭제를
            요청할 수 있으며, 회사는 이러한 요청에 지체 없이 필요한 조치를
            취합니다.
            <br />
            <br />
            만14세 미만 아동이 서비스 이용중 본인 확인을 통해 만 14세 미만으로
            확인된 경우 서비스 이용이 중지될 수 있습니다.
          </p>
        </div>
        <div className={styles.virtual_el}>
          <h2>제10조 개인정보보호 책임자 및 담당자의 소속, 성명 및 연락처</h2>
          <p>
            회사 개인정보처리방침과 관련하여 의견이 있을 경우 연락을 주시면 접수
            즉시 조치하고 처리결과를 알려 드리겠습니다. 개인정보관리 책임자와
            담당자는 아래와 같습니다.
          </p>
          <div className={`${styles.box_el} ${styles.manager_el}`}>
            <ul>
              <li>
                [개인정보보호 책임자]
                <ul>
                  <li>이름 : 정호용 </li>
                  <li>부서 : 야나두본부 개발팀</li>
                  <li>직책 : CISO / CPO</li>
                  <li>전화 : 1600-0563</li>
                </ul>
              </li>
            </ul>
            <ul>
              <li>
                [개인정보보호 담당자]
                <ul>
                  <li>이름 : 송재길</li>
                  <li>부서 : 야나두본부 개발팀</li>
                  <li>직책 : 팀원</li>
                  <li>전화 : 1600-0563</li>
                </ul>
              </li>
            </ul>
          </div>
          <p>
            기타 개인정보 침해에 대한 신고나 상담이 필요한 경우에 아래 기관에
            문의 가능합니다.
          </p>
          <ul className={styles.privacy_ul}>
            <li>
              - 개인정보침해신고센터 (
              <Link target="_blank" href="https://privacy.kisa.or.kr/main.do">
                <a>privacy.kisa.or.kr</a>
              </Link>
              / 국번없이 118)
            </li>
            <li>
              - 대검찰청 사이버수사과 (
              <Link
                target="_blank"
                href="http://www.spo.go.kr/site/spo/main.do">
                <a>www.spo.go.kr</a>
              </Link>
              / 국번없이 1301)
            </li>
            <li>
              - 경찰청 사이버안전국 (
              <Link target="_blank" href="https://www.police.go.kr/index.do">
                <a>police.go.kr </a>
              </Link>
              / 국번없이 182)
            </li>
          </ul>
        </div>
        <ul className={styles.date}>
          <li>공고일자 : 2021년 06월 24일</li>
          <li>시행일자 : 2021년 07월 01일</li>
        </ul>
        <Link href={`/${props.type}/v3.0/privacy/v1_3`}>
          <a>
            이전 개인정보 처리방침 보기
            <br />
            (2021년 06월 16일 ~ 2021년 06월 24일)
          </a>
        </Link>
      </Inner>
    </article>
  )
}
