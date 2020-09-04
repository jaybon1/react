import React, { useState } from "react";
import "./App.css";
import Test from "./Test.js";

function App() {
  // let data = ;

  const testData = () => {
    setResp([
      {
        type: 1,
        post: {
          id: 215,
          title: "test",
          content: "test",
          likeCount: 0,
          viewCount: 1,
          user: {
            id: 32,
            username: "common_sunoil@nate.com",
            nickname: "sun",
            email: "sunoil@nate.com",
            roles: "ROLE_USER",
            providerId: "sunoil@nate.com",
            provider: "common",
            createDate: "2020-09-03T01:35:17.679+00:00",
          },
          replies: [],
          createDate: "2020-09-04T05:55:08.389+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 167,
          title: "반갑습니다",
          content: "오피지지 클론입니다",
          likeCount: 2,
          viewCount: 1,
          user: {
            id: 30,
            username: "common_test@test2.com",
            nickname: "nick2",
            email: "test@test2.com",
            roles: "ROLE_USER",
            providerId: "test@test2.com",
            provider: "common",
            createDate: "2020-08-31T15:08:10.186+00:00",
          },
          replies: [],
          createDate: "2020-08-31T15:08:44.602+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 165,
          title: "안녕하세요",
          content: "처음 글을 씁니다 반갑습니다",
          likeCount: 1,
          viewCount: 2,
          user: {
            id: 29,
            username: "common_test@test1.com",
            nickname: "nick1",
            email: "test@test1.com",
            roles: "ROLE_USER",
            providerId: "test@test1.com",
            provider: "common",
            createDate: "2020-08-31T14:47:39.760+00:00",
          },
          replies: [],
          createDate: "2020-08-31T14:48:12.998+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 163,
          title: "RP 대리충전 업체 광고한 스트리머에 대한 문의 답변",
          content:
            "안녕하세요. [GM] 뽀삐입니다.문의해주신 내용은 잘 읽어보았습니다.말씀하신 부분은 게임에서 발생한 광고/홍보 행위가 아니라 방송 플랫폼에서 진행된 광고이기에게임 이용 제한을 하기는 다소 어려움이 있음을 양해 부탁 드립니다.다만, 향후 파트너 자격을 가진 크리에이터가 부적절한 광고를 하는 것이 모니터링될 경우 자격을 회수할 예정입니다.",
          likeCount: 1,
          viewCount: 12,
          user: {
            id: 25,
            username: "google_101055380919129445924",
            nickname: "opgg_e19f24f2-5c66",
            email: "star16062000@gmail.com",
            roles: "ROLE_USER",
            providerId: "101055380919129445924",
            provider: "google",
            createDate: "2020-08-30T06:25:38.936+00:00",
          },
          replies: [],
          createDate: "2020-08-31T06:37:40.291+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 162,
          title: "세라핀 인스타그램 새 게시물",
          content:
            "=아직은 말하지 못할 좋은 소식이 있다\nKDA의 인스타그램의 업로드된 아칼리의 헬멧이\n예전에 유출된 KDA 사진 속 아칼리의 의상에도 포함되어 있습니다.\n유출된 KDA의 사진에 세라핀이 있는 것으로 보아 정황상 세라핀은 KDA로 합류할 것으로 보입니다",
          likeCount: 2,
          viewCount: 2,
          user: {
            id: 25,
            username: "google_101055380919129445924",
            nickname: "opgg_e19f24f2-5c66",
            email: "star16062000@gmail.com",
            roles: "ROLE_USER",
            providerId: "101055380919129445924",
            provider: "google",
            createDate: "2020-08-30T06:25:38.936+00:00",
          },
          replies: [
            {
              id: 64,
              reply: "좋은 정보 감사합니다",
              user: {
                id: 29,
                username: "common_test@test1.com",
                nickname: "nick1",
                email: "test@test1.com",
                roles: "ROLE_USER",
                providerId: "test@test1.com",
                provider: "common",
                createDate: "2020-08-31T14:47:39.760+00:00",
              },
              createDate: "2020-08-31T14:48:33.916+00:00",
            },
          ],
          createDate: "2020-08-31T06:36:10.604+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 160,
          title: "2020 하반기 프레스티지 에디션 스킨 현황",
          content:
            "영혼의 꽃 티모 프레스티지 에디션 - 10.15 출시완료\n초능력특공대 이즈리얼 프레스티지 에디션 -  10.18 출시예정\nTrue Damage 야스오 프레스티지 에디션 - 10.19 출시 예정",
          likeCount: 2,
          viewCount: 1,
          user: {
            id: 24,
            username: "google_107071331135572871691",
            nickname: "opgg_4a6c82fa-ee79",
            email: "ponggas2@gmail.com",
            roles: "ROLE_USER",
            providerId: "107071331135572871691",
            provider: "google",
            createDate: "2020-08-29T20:13:24.196+00:00",
          },
          replies: [],
          createDate: "2020-08-31T06:01:58.194+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 158,
          title: "2020년 7월 전세계 게임 매출 순위...JPG",
          content:
            "PC\n\n\n1. 리그 오브 레전드\n\n2. 크로스파이어\n\n3. 던전앤파이터\n\n4. 몽환서유 (무슨 게임인지는 모르겠네요.. 중국 내수용게임인듯한데)\n\n5. 발로란트 (판호 문제로 중국 출시 안된 상태)\n\n6. 로블록스\n\n7. 월드 오브 탱크\n\n8. 월드 오브 워크래프트\n\n9. 카스 글옵\n\n10. 포트나이트\n",
          likeCount: 1,
          viewCount: 2,
          user: {
            id: 1,
            username: "common_123@123",
            nickname: "bk",
            email: "123@123",
            roles: "ROLE_USER",
            providerId: "123",
            provider: "common",
            createDate: "2020-04-30T15:00:00.000+00:00",
          },
          replies: [
            {
              id: 52,
              reply: "1234",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-31T00:39:57.573+00:00",
            },
            {
              id: 51,
              reply: "hi",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-31T00:30:52.645+00:00",
            },
            {
              id: 46,
              reply: "321",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T16:03:26.053+00:00",
            },
            {
              id: 45,
              reply: "123231",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:55:30.618+00:00",
            },
            {
              id: 44,
              reply: "14114",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:53:47.934+00:00",
            },
            {
              id: 43,
              reply: "123",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:52:31.486+00:00",
            },
            {
              id: 42,
              reply: "123",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:49:20.398+00:00",
            },
            {
              id: 41,
              reply: "새로넣음",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:46:19.126+00:00",
            },
            {
              id: 40,
              reply: "2313",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:44:24.162+00:00",
            },
            {
              id: 39,
              reply: "1321321",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:43:18.018+00:00",
            },
            {
              id: 38,
              reply: "32131",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:43:11.482+00:00",
            },
            {
              id: 37,
              reply: "11",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:37:21.448+00:00",
            },
            {
              id: 36,
              reply: "12312312",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:33:32.199+00:00",
            },
            {
              id: 35,
              reply: "123",
              user: {
                id: 24,
                username: "google_107071331135572871691",
                nickname: "opgg_4a6c82fa-ee79",
                email: "ponggas2@gmail.com",
                roles: "ROLE_USER",
                providerId: "107071331135572871691",
                provider: "google",
                createDate: "2020-08-29T20:13:24.196+00:00",
              },
              createDate: "2020-08-30T15:26:45.152+00:00",
            },
            {
              id: 26,
              reply: "반갑습니다",
              user: {
                id: 22,
                username: "common_test@test",
                nickname: "12311",
                email: "test@test",
                roles: "ROLE_USER",
                providerId: "test@test",
                provider: "common",
                createDate: "2020-08-29T13:34:45.329+00:00",
              },
              createDate: "2020-08-29T16:52:45.590+00:00",
            },
            {
              id: 25,
              reply: "안녕하세요",
              user: {
                id: 22,
                username: "common_test@test",
                nickname: "12311",
                email: "test@test",
                roles: "ROLE_USER",
                providerId: "test@test",
                provider: "common",
                createDate: "2020-08-29T13:34:45.329+00:00",
              },
              createDate: "2020-08-29T16:52:26.306+00:00",
            },
          ],
          createDate: "2020-08-28T16:15:03.000+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 157,
          title: "라이엇 신작 공개?, Summer Game Fest 참여",
          content:
            "8월 31일 월요일 오전 10시 PT\n\nSummerGameFest에 참여하여 룬테라를 탐험하는 새로운 방법에 대한 최신 정보를 알아보세요. \n\n-\n\n라이엇 포지와 에어쉽 신디케이트 개발사가 태그되어 있는 것으로 보아,\n\n라이엇의 신작 RPG 턴제게임 '몰락한 왕: 리그 오브 레전드 이야기'에 대한 정보를 공개할 것으로 보여집니다.",
          likeCount: 0,
          viewCount: 2,
          user: {
            id: 1,
            username: "common_123@123",
            nickname: "bk",
            email: "123@123",
            roles: "ROLE_USER",
            providerId: "123",
            provider: "common",
            createDate: "2020-04-30T15:00:00.000+00:00",
          },
          replies: [],
          createDate: "2020-08-28T16:15:03.000+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 156,
          title: "사미라 패시브 포함 조금 다른 번역",
          content:
            "번역한거라 혹시 오역 있을수 있슴당\n사진에서 봤을때 쿨타임이 왜이리 이상하게 되어있지 해서 보니까\n그 사진 찍은사람이 쿨타임 5% 룬을 들고 찍은거같음.\n1.052 곱해보니까 원래 쿨타임 딱딱 맞는걸로 봐서 이게 맞는듯",
          likeCount: 0,
          viewCount: 2,
          user: {
            id: 1,
            username: "common_123@123",
            nickname: "bk",
            email: "123@123",
            roles: "ROLE_USER",
            providerId: "123",
            provider: "common",
            createDate: "2020-04-30T15:00:00.000+00:00",
          },
          replies: [],
          createDate: "2020-08-28T16:15:03.000+00:00",
        },
      },
      {
        type: 1,
        post: {
          id: 155,
          title: "전략적 팀 전투 운명 패스와 새로운 컨텐츠",
          content:
            "전략적 팀 전투: 운명의 출시가 다가오고 있습니다. 새로운 세트라면 나만의 색깔을 뽐내는 온갖 새로운 수단을 빼놓을 수 없겠죠. 드래곤 테마의 새로운 꼬마 전설이 시리즈, 결투장 상황에 따라 변화하는 아이오니아 테마의 결투장 스킨, 화려하고 신나는 신규 펑펑 효과 등이 기다리고 있습니다.",
          likeCount: 1,
          viewCount: 1,
          user: {
            id: 1,
            username: "common_123@123",
            nickname: "bk",
            email: "123@123",
            roles: "ROLE_USER",
            providerId: "123",
            provider: "common",
            createDate: "2020-04-30T15:00:00.000+00:00",
          },
          replies: [],
          createDate: "2020-08-28T16:15:03.000+00:00",
        },
      },
      {
        type: 2,
        post: null,
      },
    ]);
  };

  const [resp, setResp] = useState([]);

  // const replyList = resp.data[6].post.replies.map((reply) => {
  //   return reply.id;
  // });

  return (
    <div>
      {resp.map((communityDto, i) => (
        <div key={"communityDto" + i}>
          {communityDto.post !== null ? (
            <div>
              <div>{communityDto.post.title}</div>
              <div>
                {communityDto.post.replies.map((reply, k) => (
                  <div>
                    <div>{reply.reply}</div>
                    <div>{reply.user.nickname}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>{0}</div>
          )}
        </div>
      ))}
      <button onClick={testData}></button>
    </div>
  );
}

export default App;
