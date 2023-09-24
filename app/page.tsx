import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
      <div className="page-content">
        <div className="div">
          <div className="ww-home-page" id="home">
            <div className="ww-wedding-announcement d-flex align-items-center justify-content-start">
              <div className="container ww-announcement-container">
                <p className="ww-couple-name ww-title">Wonyoung & Somin</p>
                <p className="h2 mt-5 ww-title">
                  | WE ARE GETTING MARRIED |
                </p>
                <p className="h2 mt-5 ww-title">
                  <b>2019. 05. 18. SAT PM 02:30</b>
                  <br/>부산 해운대 센텀시티 센텀사이언스파크 23층
                </p>
              </div>
            </div>
          </div>
          <div className="ww-nav-bar sticky-top bg-light">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <button aria-controls="ww-navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                        className="navbar-toggler"
                        data-target="#ww-navbarNav" data-toggle="collapse" type="button">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse text-uppercase" id="ww-navbarNav">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item"><a className="nav-link smooth-scroll" href="@/pages/index#home">Home</a>
                    </li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#couple">Couple</a></li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#events">Events</a></li>
                    <li className="nav-item"><a className="nav-link smooth-scroll"
                                                href="@/pages/index#gallery">Gallery</a></li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
          <div className="ww-section" id="couple">
            <div className="container">
              <h2 className="h1 text-center pb-3 ww-title">신랑 & 신부</h2>
              <div className="row text-center">
                <div className="col-md-6">
                  <div className="mt-3">
                    <h3 className="h2 ww-title">
                      이소민</h3>
                    {/*<Image alt="Groom" className="img-fluid" width={500}
                                        height={500} {process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic8.jpeg`} />*/}
                    <Image
                        alt="Groom"
                        className="img-fluid"
                        src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic8.jpeg`}
                        width={500}
                        height={500}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mt-3">
                    <h3 className="h2 ww-title">
                      최원영</h3>
                    <Image alt="Bride" className="img-fluid" width={500}
                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic9.jpeg`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ww-section bg-light" id="events">
            <div className="container ww-wedding-event">
              <h2 className="h1 text-center pb-3 ww-title">초대합니다</h2>
              <div className="col text-center mb-5">
                <h6>1463<br/>
                  (만난지 4년+1일 되는날 결혼 = 1463일)
                </h6>
              </div>
              <div className="row">
                <div className="col-md-7 col-sm-12">
                  <div className="my-3">
                    <div className="h4">웨딩 본식</div>
                    <ul>
                      <li>
                        <i className="text-muted fas fa-map-marker-alt"></i>
                        <span className="pl-2 text-muted">부산 해운대 우동 센텀사이언스 파크 23층</span>
                      </li>
                      <li className="pt-2">
                        <i className="text-muted far fa-calendar-alt"></i>
                        <span className="pl-2 text-muted">2019년 5월 18일, 2:30PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="my-3">
                    <Image alt="Wedding Party" className="img-fluid" width={500}
                           height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/wedding-party.jpg`} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-7 col-sm-12">
                  <div className="my-3">
                    <div className="h4">식사</div>
                    <ul>
                      <li>
                        <i className="text-muted fas fa-map-marker-alt "></i>
                        <span className="pl-2 text-muted">부산 해운대 우동 센텀사이언스 파크 지하 1층 더파티 센텀점</span>
                      </li>
                      <li className="pt-2">
                        <i className="text-muted far fa-calendar-alt "></i>
                        <span className="pl-2 text-muted">2019년 5월 18일, 2:30PM - 4:30PM</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 col-sm-12">
                  <div className="my-3"><Image alt="Reception" className="img-fluid"
                                               width={500}
                                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/reception.jpg`} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ww-section" id="gallery">
            <div className="ww-photo-gallery">
              <div className="container">
                <h2 className="h1 text-center pb-3 ww-title">포토 갤러리</h2>
                <div className="ww-gallery">
                  <div className="card-columns">
                    <div className="card" data-groups="[&quot;party&quot;,&quot;wedding&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 2" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic2.jpeg`} />
                      </a>
                    </div>
                    <div className="card" data-groups="[&quot;vacation&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 3" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic3.jpeg`} />
                      </a>
                    </div>
                    <div className="card" data-groups="[&quot;party&quot;,&quot;vacation&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 4" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic4.jpeg`} />
                      </a>
                    </div>
                    <div className="card" data-groups="[&quot;vacation&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 5" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic6.jpeg`} />
                      </a>
                    </div>
                    <div className="card"
                         data-groups="[&quot;wedding&quot;,&quot;ceremony&quot;,&quot;party&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 6" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic7.jpeg`} />
                      </a>
                    </div>
                    <div className="card" data-groups="[&quot;vacation&quot;]">
                      <a data-gallery="ww-gallery" data-toggle="lightbox">
                        <Image alt="Gallery Pic 7" className="img-fluid" width={500}
                               height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/pic5.jpeg`} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ww-section" id="confirm">
            <div id="fh5co-started" className="fh5co-section-gray">
              <div className="overlay"></div>
              <div className="container">
                <div className="row">
                  <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <p className="sub-title sub-title__wedding">Để chúng mình chuẩn bị chu đáo nhất</p>
                    <h2 className="main-font">{`Bạn vui lòng xác nhận tham dự`}</h2>
                    {/*<div onClick={onSelect(options.YES)}>*/}
                    <div>
                      <input
                          style={{marginRight: 8, marginTop: 16}}
                          type="radio"
                          id="ok"
                          name="drone"
                          // value={options.YES}
                          // checked={selected === options.YES}
                      />
                      <label style={{fontSize: 18, fontWeight: 'normal'}} htmlFor="ok">
                        {' '}
                        Mình chắc chắn sẽ tham dự
                      </label>
                    </div>
                    {/*<div onClick={onSelect(options.NO)}>*/}
                    <div>
                      <input
                          style={{marginRight: 8}}
                          type="radio"
                          id="no"
                          name="drone"
                          // value={options.NO}
                          // checked={selected === options.NO}
                      />
                      <label style={{fontSize: 18, fontWeight: 'normal'}} htmlFor="no">
                        {' '}
                        Xin lỗi, mình không thể tham dự
                      </label>
                    </div>
                  </div>
                </div>
                {/*<div className="row" css={styFlex}>*/}
                <div className="row">
                  <div className="col-md-3">
                    {/*<button onClick={submit} className="btn btn-default btn-block">*/}
                    <button className="btn btn-default btn-block">
                      {/*{submitting ? 'Đang gửi...' : 'Gửi'}*/}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ww-section ww-rsvp-detail" id="map">
            <div className="container">
              <div className="col text-center">
                <h2 className="h1 text-center pb-3 ww-title">오시는 길</h2>
                <div>
                  <h5>센텀사이언스파크웨딩홀 23층 스카이홀</h5>
                  <h6>(부산 해운대구 센텀중앙로 79)</h6>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-12">
                  <div className="my-3 text-center">
                    <a href="http://naver.me/5pTy3HCa">
                      <Image alt="naver-map" className="map-icon" id="naver-map"
                             width={500}
                             height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/naver-map.png`} />
                    </a>
                    <a href="http://dmaps.kr/2bms8">
                      <Image alt="kakao-map" className="map-icon" id="kakao-map"
                             width={500}
                             height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/kakao-map.png`} />
                    </a>
                    <a href="https://maps.app.goo.gl/jfDxw">
                      <Image alt="google-map" className="map-icon" id="google-map"
                             width={500}
                             height={500} src={process.env.NEXT_PUBLIC_BASE_PATH + `/images/map/google-map.png`} />
                    </a>
                  </div>
                  <div className="col text-center">
                    <label>
                      셔틀버스 - 센텀시티역 4번출구앞에서 15분 간격으로 운행
                    </label>
                  </div>
                  <div className="my-3">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.297439052569!2d129.1238775160104!3d35.1741384652207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x356892c2513ecf5d%3A0x7d362ece2091e2f8!2z7IS87YWA7IKs7J207Ja47Iqk7YyM7YGsIOy7qOuypOyFmO2ZgA!5e0!3m2!1sko!2skr!4v1554092125630!5m2!1sko!2skr"
                        width="100%" height="400"></iframe>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="ww-section bg-light" id="comment">
            <div className="ww-photo-gallery">
              <div className="container">
                <div className="col text-center">
                  <h2 className="h1 text-center pb-3 ww-title">축하메시지</h2><br/>
                  <div id="comments"></div>
                  <br/>
                  <div className="row">
                    <div className="col text-center">
                      <form
                          action="https://github.com/AndersonChoi/wedding-card/blob/master/README.md">
                        <button className="btn btn-primary btn-submit" type="submit">메시지 남기러 가기
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
