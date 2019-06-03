package handlers

import (
	//"net/http"
	//"encoding/json"
	//"bytes"
	//"net/http/httptest"
	//"fmt"
	//"github.com/nimajalali/go-force/force"
	"testing"
)

/**
Pivoted in design so this test is under major changes to adop the pivot.
 */

//interface for dependency injection
//this will decouple the code from third party for testing.
//type DataAccessLayer interface {
//	Query(query string, out interface{}) error
//	GetAccessToken() string
//}
//
//type ForceApi struct {
//
//}
//
func TestCorsHandler_ServeHTTP(t *testing.T) {
//
//	//hctx := NewContext("testKey", sessStore, userStore, testTrie)
//	hctx := NewContext(&force.ForceApi{nil, nil, nil, nil,
//	nil, nil, nil, nil})
//	nu := users.NewUser{"kwontae1@uw.edu", "1234567", "1234567", "test1",
//		"tester","testing"}
//	body, _ := json.Marshal(&nu)
//	cases := []struct {
//		name string
//		methodType string
//		allowOrigin string
//		allowMethods string
//		allowHeaders string
//		exposeHeaders string
//		maxAge string
//	}{
//		{"Valid Cors",
//		http.MethodPost,
//			originAny,
//			allowMethods,
//			allowHeaders,
//			authHeader,
//			maxAge,
//		},
//		{"Method Options shouldn't do anything, but still get the correct header values written in",
//			http.MethodOptions,
//			originAny,
//			allowMethods,
//			allowHeaders,
//			authHeader,
//			maxAge,
//		},
//	}
//	for _, c := range cases {
//		req, err := http.NewRequest(c.methodType, "/authorize", bytes.NewReader(body))
//		if err != nil {
//			t.Fatal(err)
//		}
//		req.Header.Add(headerContentType, contentTypeJSON)
//		// We create a ResponseRecorder (which satisfies http.ResponseWriter) to record the response.
//		rr := httptest.NewRecorder()
//		ch := NewCorsHandler(http.HandlerFunc(hctx.UsersHandler))
//		ch.ServeHTTP(rr, req)
//		if rr.Header().Get(headerAccessControlAllowOrigin) != c.allowOrigin &&
//			rr.Header().Get(headerAccessControlAllowMethods) != c.allowMethods &&
//				rr.Header().Get(headerAccessControlAllowHeaders) != c.allowHeaders &&
//					rr.Header().Get(headerAccessControlExposeHeaders) != c.exposeHeaders &&
//						rr.Header().Get(headerAccessControlMaxAge) != c.maxAge {
//							t.Errorf(fmt.Sprintf("case %s error missing headers", c.name	))
//		}
//	}
}