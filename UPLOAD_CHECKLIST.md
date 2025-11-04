# Hostinger Upload Checklist
## Quick Reference Guide

---

## 📁 **FILES TO UPLOAD TO `public_html/`**

### ✅ **HTML Files (Upload to root)**
```
index.html
about.html
career.html
contact.html
grievance.html
regulatory.html
```

### ✅ **Folders (Upload entire folders)**
```
assets/
├── css/
│   └── common.css
└── js/
    ├── common.js
    └── firebase-config.js

Images/
├── Logo.png
├── hero_section.png
├── About_section.png
├── Stats_bg.png
├── blackLogo.png
└── logos/
    ├── 1.png
    ├── 2.png
    ├── 3.png
    ├── 4.png
    └── Aboutus/
        ├── About1.png
        └── vision.png
```

### ✅ **Configuration File**
```
.htaccess (upload to root)
```

---

## ⚠️ **IMPORTANT NOTES**

1. **Case Sensitivity:** 
   - `Images/` (capital I) - must match exactly
   - `assets/` (lowercase) - must match exactly

2. **Folder Structure:**
   - Keep exact same structure as local
   - Don't flatten folders

3. **File Permissions:**
   - Files: `644`
   - Folders: `755`
   - `.htaccess`: `644`

4. **Root Directory:**
   - Upload everything to `public_html/`
   - `index.html` should be directly in `public_html/`

---

## 🚫 **FILES TO SKIP (Optional)**

```
carrers.html (duplicate file)
PRODUCTION_READINESS_REPORT.md (documentation)
HOSTINGER_DEPLOYMENT_GUIDE.md (documentation)
UPLOAD_CHECKLIST.md (this file)
*.md files (documentation files)
```

---

## ✅ **VERIFICATION STEPS**

After upload, check:

1. ✅ `https://yourdomain.com` loads homepage
2. ✅ `https://yourdomain.com/about.html` loads
3. ✅ `https://yourdomain.com/career.html` loads
4. ✅ Images display: `https://yourdomain.com/Images/Logo.png`
5. ✅ CSS loads: `https://yourdomain.com/assets/css/common.css`
6. ✅ Forms work and submit to Firebase

---

## 📞 **QUICK REFERENCE**

**Hostinger File Manager Path:**
```
hPanel → File Manager → public_html/
```

**Upload Method:**
1. Click "Upload" in File Manager
2. Select all files/folders
3. Wait for upload to complete
4. Set permissions if needed

---

**Ready to upload!** 🚀

